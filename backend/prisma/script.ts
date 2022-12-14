import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('π« seed executing ...');
  // γγ­γγ£γΌγ«
  await prisma.profile.deleteMany();
  await prisma.profile.create({
    data: {
        id: 1,
        name: 'Nao Suetsugu',
        occupation: 'BootCamp0ζη',
        introduction: 'εεΌ·δΈ­',         
        twitter_id: 'suuuuetsugu',
        github_id: 'suuuuetsugu',
        email: 'suuuuestugu@gmail.com',
    }
  });

  // γγγ­
  await prisma.good.deleteMany();
  await prisma.good.create({
    data: {
        id: 1,
        count: 0,
    }
  });

  // δ½ε
  await prisma.work.deleteMany()
  await prisma.work.create({
      data: {
        id: 1,
        title: 'TODOγ’γγͺ',
        description: 'MySQL/Express/Prisma/Next.js',
        image_url_1: 'https://free-materials.com/adm/wp-content/uploads/2019/01/adpDSC_2004-750x500.jpg',
        profileId: 1   
      }
  })

  console.log('π« seed finished.');
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