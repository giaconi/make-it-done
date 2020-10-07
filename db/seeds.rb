# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

lists = List.create([
  {
    title: "Talks I'd like to attend",
    user: User.first
  },
  {
    title: "Projects to be done in the future",
    user: User.first
  },
  {
    title: "Peoples to chat with",
    user: User.first
  },
  {
    title: "Movies to see this weekend",
    user: User.first
  },
  {
    title: "Reads from articles to check",
    user: User.first
  },
  {
    title: "Websites to sign-up",
    user: User.first
  },
  {
    title: "Books to order",
    user: User.first
  },
  {
    title: "Food to cook",
    user: User.first
  },
  {
    title: "Clean stuff in the house",
    user: User.first
  }
])

tasks = Task.create ([
  {
    description: "Bread",
    done: true,
    duration: 5,
    list: lists.first
  },
  {
    description: "Carrots",
    duration: 1,
    list: lists.second
  },
  {
    description: "Apples",
    duration: 1,
    list: lists.last
  }

])
