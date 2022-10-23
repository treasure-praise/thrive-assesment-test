import UsersSkeleton from "./UsersSkeleton"

export default {
  title: "Skeleton Screens/UsersSkeleton",
  component: UsersSkeleton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
}

export const skeleton = () => <UsersSkeleton />
