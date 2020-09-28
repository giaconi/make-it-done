# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

lists = List.create([
  {
    title: "Shopping",
    user: User.first
  },
  {
    title: "Study",
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
    done: false,
    duration: 1,
    list: lists.first
  },
  {
    description: "Apples",
    done: true,
    duration: 1,
    list: lists.first
  },

])
