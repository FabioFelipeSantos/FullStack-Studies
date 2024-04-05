import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";

/**
 * Registers a user for an event.
 *
 * This code snippet is defining a POST endpoint in a Fastify application for the route `/events/:eventId/attendees`. The `:eventId` in the route is a route parameter, which allows for dynamic parts in the route. For example, `/events/123/attendees` and `/events/456/attendees` would both match this route, with `123` and `456` being the `eventId` respectively.
 *
 * The `withTypeProvider<ZodTypeProvider>()` method is used to specify that the Zod library will be used for validation and parsing of the request and response. Zod is a library for creating and validating schemas for JavaScript and TypeScript data.
 *
 * The `schema` object inside the route definition is used to define the expected shape of the request and response. It has three parts:
 *
 * 1. `body`: This defines the expected shape of the request body. In this case, it's expected to be an object with a `name` property (a string) and an `email` property (a string that should be a valid email).
 *
 * 2. `params`: This defines the expected shape of the route parameters. In this case, it's expected to be an object with an `eventId` property (a string that should be a valid UUID).
 *
 * 3. `response`: This defines the expected shape of the response. In this case, for a 201 status code, it's expected to be an object with an `attendeeId` property (a number).
 *
 * The route handler function is an asynchronous function that receives the request and reply objects. It extracts the `eventId`, `name`, and `email` from the request. It then uses Prisma to create a new attendee record in the database with the provided name, email, and eventId. Finally, it sends a 201 status code response with the newly created `attendeeId`.
 *
 * @param app - The Fastify instance.
 */
export async function registerForEvent(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/events/:eventId/attendees",
    {
      schema: {
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        params: z.object({
          eventId: z.string().uuid(),
        }),
        response: {
          201: z.object({
            attendeeId: z.number(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { eventId } = request.params;
      const { name, email } = request.body;

      const attendeeFromEmail = await prisma.attendee.findUnique({
        where: {
          eventId_email: {
            email,
            eventId,
          },
        },
      });

      if (attendeeFromEmail !== null) {
        throw new Error("Attendee with this email already registered for this event");
      }

      const attendee = await prisma.attendee.create({
        data: {
          name,
          email,
          eventId,
        },
      });

      return reply.status(201).send({ attendeeId: attendee.id });
    }
  );
}
