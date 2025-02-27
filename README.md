This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

If you want to run the project locally, make sure you install the necessary node modules first:

```bash
npm install --f
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## State Management and Styling

This project uses Redux for state management. Instead of storing data in a database, state is saved in `localStorage` since this is just a test environment. This allows for temporary persistence between page reloads without requiring a backend.

For styling, Tailwind CSS is used to ensure a responsive and modern design with utility-first classes. The layout follows a **2px margin** convention for spacing consistency. Task containers have a **light gray background**, and the text is styled in **black** for readability.

Additionally, Iconify is used for icons, providing a wide range of customizable vector icons. The project also integrates `react-beautiful-dnd` to enable drag-and-drop functionality for a smooth and interactive user experience.

## Task Management Features

- **Task Notification System**:

  - **Normal Tasks**: Displayed with a white background.
  - **Upcoming Deadlines (2 days before due date)**: Highlighted in yellow.
  - **Past Deadlines (Task has reached the deadline)**: Highlighted in pink.
  - **Completed Tasks**: Marked with a green flag.

- **Task Editing and Deletion**:

  - Each task has a three-dot menu at the top right, which collapses to reveal edit and delete options.

- **Task Status Updates**:

  - Tasks can be updated using both drag-and-drop functionality and buttons labeled with `>>` and `<<` symbols.

## Responsive Design

The application is fully responsive and adapts to different screen sizes:

- **Mobile & iPad**: Tasks are displayed at **90% width** for better readability.
- **Desktop**: Task containers take up **40% width**, ensuring a balanced layout.

This system ensures an intuitive and interactive way to manage tasks effectively.

## Repository and Live Demo

- **GitHub Repository**: [https://github.com/legitem2023/umbra\_exam](https://github.com/legitem2023/umbra_exam)
- **Deployed Version**: [https://umbra-exam.vercel.app/](https://umbra-exam.vercel.app/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template\&filter=next.js\&utm_source=create-next-app\&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

