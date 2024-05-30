import { client } from "@/lib/prisma";
import { clerkClient, currentUser } from "@clerk/nextjs";

export const onGetAllAccountDomains = async () => {
  const user = await currentUser();
  if (!user) return;
  try {
    const domains = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        id: true,
        domains: {
          select: {
            name: true,
            icon: true,
            id: true,
            customer: {
              select: {
                chatRoom: {
                  select: {
                    id: true,
                    live: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return { ...domains };
  } catch (error) {
    console.log(error);
  }
};
export const onUpdatePassword = async (password: string) => {
  try {
    const user = await currentUser();

    if (!user) return null;
    const update = await clerkClient.users.updateUser(user.id, { password });
    if (update) {
      return { status: 200, message: "Password updated" };
    }
  } catch (error) {
    console.log(error);
  }
};
