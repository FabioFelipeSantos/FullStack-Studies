# 1 Introduction

The **command line** is a text interface for your computer. It’s a program that takes in commands and passes them on to the computer’s operating system to run.

From the command line, you can navigate through files and folders on your computer, just as you would with Finder on Mac OS or Windows Explorer on Windows. The difference is that the <span style="color: khaki; font-size: 1.2em;"><em style="color: inherit;">command line is fully text-based</em></span>.

The advantage of using the command line is its power. You can run programs, write scripts to automate common tasks, and combine simple commands to handle difficult tasks. All of these traits come together to make it an important programming tool.

This course is for unix-based systems such as Linux and Mac OS X. You can also download programs on Windows that will allow you to use the same commands. An appendix of all commands taught in this course is available [here](https://www.codecademy.com/articles/command-line-commands).

```ad-note
When using the command line, we refer to folders as _directories_. Files and directories on your computer are organized into a _filesystem_.
```

# 2 Filesystem

A <span style="color: chartreuse; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">filesystem</em></strong></span> organizes a computer’s files and directories into a tree structure:

1. The first directory in the filesystem is the <span style="color: tomato; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit; text-transform: capitalize">root directory</em></strong></span>. It is the parent of all other directories and files in the filesystem.
2. Each <span style="color: fuchsia; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit; text-transform: capitalize">parent directory</em></strong></span> can contain more <span style="color: aquamarine; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit; text-transform: capitalize">child directories</em></strong></span> and files. In the filesystem on the following figure, `{shell}blog/` is the parent of `2014/`, `2015/`, and `hardware.txt`.
3. Each directory can contain more files and child directories. The <span style="color: coral; font-size: 1.2em;"><em style="color: inherit;">parent-child relationship</em></span> continues as long as directories and files are nested.

You’re probably already familiar with this tree structure - Mac Finder and Windows Explorer represent the filesystem as trees as well.
![[filesystem-tree.png||1000]]

# 3 `ls` Command

The first command we’re going to look at is `ls`. A <span style="color: orange; font-size: 1.2em;"><strong style="color: inherit;"><em style="color: inherit;">Command</em></strong></span> is a directive to the computer to perform a specific task. When you type `ls`, the command line looks at the directory you are in, and then “lists” all the files and directories inside of it.

In the terminal, the first thing you see is `$`. This is called a _shell prompt_. It appears when the terminal is ready to accept a command.

If we typed:

```powershell
$ ls
```

the terminal would display our current directory’s files and directories:

```powershell
2014  2015  hardware.txt
```

The directories `2014/`, `2015/`, and the file `hardware.txt` are the contents of the current directory.

# 4 `pwd` Command

The next command we’re going to look at is `pwd`, which stands for “print working directory.” It outputs the name of the directory you are currently in, called the _working directory_.

Here the working directory is `blog/`. In Codecademy courses, your working directory is usually inside the `/home/ccuser/workspace/` directory.

Together with `ls`, the `pwd` command is useful to show where you are in the filesystem.

# 5 `cd` Command - Part 1

Our next command is `cd`, which stands for “change directory.” Just as you would click on a folder in Windows Explorer or Finder, `cd` switches you into the directory you specify. In other words, `cd` changes the working directory.

Let’s say the directory we change into is `2015/`:

```powershell
$ cd 2015
```

When a file, directory, or program is passed into a command, it is called an <span style="color: aqua; font-size: 1.2em;"><em style="color: inherit;">Argument</em></span>. Here the `2015/` directory is an argument for the `cd` command.

The `cd` command takes a directory name as an argument and switches into that directory.

It is also important to move up one directory. For this, we use:

```powershell
$ cd ..
```

The argument `..` stands for the directory above the current working directory. Assuming we are in `/home/ccuser/workspace/blog/2015`:

```powershell
$ pwd/home/ccuser/workspace/blog/2015$ cd ..$ pwd/home/ccuser/workspace/blog
```

The above example uses the command `cd ..` to navigate up to the `/home/ccuser/workspace/blog/` directory.

# 6 `cd` Command - Part 2

To move across multiple directories with a single command, we can provide `cd` a relative path to the `memory/` directory as an *argument*. From the `blog/` directory use:

```powershell
$ cd 2015/jan/memory
```

The relative path is a forward slash (/) separated list of all the directories leading to the goal directory. In the above example, we navigate directly to **memory/** from **blog/** using `cd` with the relative path `2015/jan/memory`.

We can also move up multiple directories using the `..` argument. To go from **memory** up 2 directories to **2015**, we use `../..:

```powershell
$ pwd
/home/ccuser/workspace/blog/2015/jan/memory
$ cd ../..
$ pwd
/home/ccuser/workspace/blog/2015
```

The relative path `../..` can be read: the directory above and the directory above that.

Lastly, we can move to an adjacent directory using `..` and then a directory name. If we are in the **2015/** directory and we want to go into the **2014/** directory, we go up one directory then into the **2014/** directory:

```powershell
$ ls
2014  2015  hardware.txt
$ cd 2015
$ pwd
/home/ccuser/workspace/blog/2015
$ cd ../2014
$ pwd
/home/ccuser/workspace/blog/2014
```

The relative path is the directory above **2015/** (which is **blog/**) and then the **2014/**.

# 7 `mkdir` Command

Now that we can traverse the existing filesystem, let’s try editing it by making directories (folders) through the command line. The command for that is `mkdir`:

```powershell
$ mkdir media
```

The `mkdir` command stands for <span style="color: rgb(200, 120, 120); font-size: 1.2em;"><em style="color: inherit;">“make directory”</em></span>. It takes in a directory name as an *argument* and then creates a new directory in the current working directory.

Here we used `mkdir` to create a new directory named **media/** inside our working directory.

# 8 `touch` Command

Now we know how to create directories through the command line, but how do we create new files? We can do this using the command `touch`:

```powershell
$ touch keyboard.txt
```

The `touch` command creates a new file inside the working directory. It takes in a filename as an *argument* and then creates an empty file with that name in the current working directory.

Here we used `touch` to create a new file named **keyboard.txt**.

# 9 Helper Commands

Now that we’ve covered the basics of navigating your filesystem from the command line, let’s look at some helpful commands that will make using it easier!

- `tab` can be used to autocomplete your command. When you are typing the name of an existing file or directory, you can use tab to finish the rest of the name.
- The up and down arrows (<span style="color: fuchsia; font-size: 1.2em;"><strong style="color: inherit; background-color: rgb(50, 50, 50); padding-left: 3px">↑</strong></span> and <span style="color: fuchsia; font-size: 1.2em;"><strong style="color: inherit; background-color: rgb(50, 50, 50); padding-left: 3px">↓</strong></span>) can be used to cycle through your previous commands. <span style="color: fuchsia; font-size: 1.2em;"><strong style="color: inherit; background-color: rgb(50, 50, 50); padding-left: 3px">↑</strong></span> will take you up through your most recent commands, and <span style="color: fuchsia; font-size: 1.2em;"><strong style="color: inherit; background-color: rgb(50, 50, 50); padding-left: 3 px">↓</strong></span> will take you back through to the most recent one.
- `clear` is used to clear your terminal, which is useful when it’s full of previous commands and outputs. It doesn’t change or undo your previous commands, it just clears them from view. As mentioned above, you can use the up and down arrow keys to review your command history anytime.

