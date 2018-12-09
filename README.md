React To Do List with additional functionalities:

- Filtering by UserID and/or Status
- Able to Sort by status, title, ID, User ID
- Can add a new item (not persistant database)
- Edit an existing item
- Pagination that can be adjusted. Default is determined by the baseEndItem state

How to run

- After cloning and installing dependancies (npm install), you should be able to npm start and run a local version.

Known Issues/Possible Improvements:

- As of this moment, there is a bug where I cannot edit a newly added item. The change is not reflected. I can also not filter by a new user ID that I have just added.
- I cannot sort in the reverse. Example: I can only sort alphabetically starting with A, and not with Z. Same with the user ID only starting from "1". An improvement would be to allow this functionality.
- The sorting words can use an arrow to indicate to the user that it is sortable.
- If I had more time I would love to style the checkbox properly, but due to time constraints I have left it mostly out of the box styling.
- Styling has not been optimized for responsiveness. Only styled for desktop for now.
- Accessibility: I did not optimize this for accessibility (mainly concerning keyboard navigation). If this was done properly I should be able to access each task item with the keyboard, enter and exist modals etc.
- I think there is a possible bug where I am unable to filter properly (no results are returned). It happens sporadically and possibly only when I am idle on the app for a bit of time. Once I reload it works as intended.

Reasons

- I chose to prop drill rather than implementing Redux or Context API due to time constraints and what I was most familiar with given the requirements. I felt it got messier as the functionality became more complex and time was dwindling. This is a major point of improvement that can be applied down the road.
- Similar to above, I went with styled-components out of sheer familiarity and time constraints. I would love to try Material-UI in the future.
- Reusable components/functions: The initial idea was to reuse components/functions as best as possible. But I definitely noticed that as time was ticking, I may have not implemented this as I imagined. I'm sure there are points of improvements that can be applied. Same with the styling. I'm sure there are repetitions that can be fixed and consolidated.
