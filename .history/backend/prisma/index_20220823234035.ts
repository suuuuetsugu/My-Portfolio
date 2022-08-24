import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('💫 seed executing ...');
  // プロフィール
  await prisma.profile.deleteMany();
  await prisma.profile.create({
    data: {
        id: 1,
        name: 'Nao Suetsugu',
        occupation: 'BootCamp0期生',
        introduction: '勉強中',         
        twitter_id: 'suuuuetsugu',
        github_id: 'suuuuetsugu',
        email: 'suuuuestugu@gmail.com',
    }
  });

  // いいね
  await prisma.good.deleteMany();
  await prisma.good.create({
    data: {
        id: 1,
        count: 0,
    }
  });

  // 作品
  await prisma.work.deleteMany()
  await prisma.work.create({
      data: {
        id: 1,
        title: 'TODOアプリ',
        description: 'MySQL/Express/Prisma/Next.js',
        image_url_1: 'https://free-materials.com/adm/wp-content/uploads/2019/01/adpDSC_2004-750x500.jpg',
        profileId: 1   
      }
  })

  console.log('💫 seed finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })