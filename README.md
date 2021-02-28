# Hughie's Blockchain-based, AI-driven TODO List

I've started with a bare-bones implementation of a todo list. It's got a local-storage based store so that it's durable across browser sessions as well as refreshes.

It's built fully in react. It has the minimum set of functionality, plus a few extras such as a "copy" feature.

To run, simply pull this repo, run `npm install`, followed by `npm start`

Here are a few design-decisions that I made (and can identify as decisions)

- I chose to use uuid's for ids because managing an auto-incrementing id across components was irritating. In the case of an actual db backing, there would be other considerations.
- I chose localStorage over session storage because I wanted long-term durabilty.
