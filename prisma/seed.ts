import prisma from '@/lib/index'
async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Sameer Khan',
      email: 'sameer@sinkedin.com',
      password: 'hashedpassword', // Hash this properly
      bio: 'Founder of 100+ failed startups 🫠',
    },
  });

  await prisma.post.create({
    data: {
      title: 'Rejected by YC again',
      description: 'This is my 5th rejection. Still trying. 🚀',
      authorId: user.id,
      isPublished: true,
    },
  });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
