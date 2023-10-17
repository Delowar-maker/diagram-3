import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//Aggregate  <................................................................>

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();

    let result = await prisma.product.aggregate({
      _avg: { price: true },
      _count: { price: true },
      _max: { price: true },
      _min: { price: true },
      _sum: { price: true },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

//Aggregate(groupBy, having)  <................................................................>

// export async function POST(req, res) {
//     BigInt.prototype.toJSON = function () {
//       return this.toString();
//     };
//     try {
//       const prisma = new PrismaClient();

//       let result = await prisma.product.groupBy({
//        by:["fristName"],
//        _count:{userid:true},
//        _avg:{price:true},
//        having:{fristName:"kamal"}
//       });

//       return NextResponse.json({ status: "success", data: result });
//     } catch (error) {
//       return NextResponse.json({ status: "fail", data: error.toString() });
//     }
//   }


// Transactions & Rollback  <................................................................>



// export async function POST(req, res) {
//     BigInt.prototype.toJSON = function () {
//       return this.toString();
//     };
//     try {
//       const prisma = new PrismaClient();

//         const deleteProduct = prisma.product.delete({
//             where:{id:10}
//         })

//         const createCategory = prisma.category.create({
//             data:{title:"edw",metaTitle:"weee",slug:"eejj",content:"dddee"}
//         })

//       const result= await  prisma.$transaction([deleteProduct,createCategory])

//       return NextResponse.json({ status: "success", data: result });
//     } catch (error) {
//       return NextResponse.json({ status: "fail", data: error.toString() });
//     }
//   }

//pagination

// export async function POST(req, res) {
//     BigInt.prototype.toJSON = function () {
//       return this.toString();
//     };
//     try {
//       const prisma = new PrismaClient();

//       let result = await prisma.product.findMany({
//        skip:2,
//        take:2
//       });

//       return NextResponse.json({ status: "success", data: result });
//     } catch (error) {
//       return NextResponse.json({ status: "fail", data: error.toString() });
//     }
//   }

// Query Time Enable Logging

// export async function POST(req, res) {
//     BigInt.prototype.toJSON = function () {
//       return this.toString();
//     };
//     try {
//         const startTime = Date.now();
//       const prisma = new PrismaClient({log:['query','info','warn','error']});

//       let result = await prisma.product.findMany({
//        skip:2,
//        take:2
//       });

//       const executionTime =(Date.now()-startTime)

//       return NextResponse.json({ status: "success", data: result, executionTime:executionTime });
//     } catch (error) {
//       return NextResponse.json({ status: "fail", data: error.toString() });
//     }
//   }

// row query
// export async function POST(req, res) {
//     BigInt.prototype.toJSON = function () {
//       return this.toString();
//     };
//     try {
//       const prisma = new PrismaClient();
//       const result = await prisma.$queryRaw `SELECT * FROM employee`
//       return NextResponse.json({ status: "success", data: result });
//     } catch (error) {
//       return NextResponse.json({ status: "fail", data: error.toString() });
//     }
//   }

// comparison Operators
// export async function POST(req, res) {
//     BigInt.prototype.toJSON = function () {
//       return this.toString();
//     };
//     try {

//       const prisma = new PrismaClient();

//       const result = await prisma.product.findMany({
//     //    where:{price:{equals:20}}
//     //    where:{price:{lt:100}}
//     //    where:{price:{lte:100}}
//     //    where:{price:{not:100}}
//     //    where:{price:{in:[100,80]}}
//     //    where:{price:{notIn:[100,80]}}
//     //  where:{fristName:{contains:'kamal'}}
//     //  where:{fristName:{startsWith:'k'}}
//         where:{fristName:{endsWith:'l'}}

//       });

//       return NextResponse.json({ status: "success", data: result});
//     } catch (error) {
//       return NextResponse.json({ status: "fail", data: error.toString() });
//     }
//   }

// Logical Operators

// export async function POST(req, res) {
//     BigInt.prototype.toJSON = function () {
//       return this.toString();
//     };
//     try {

//       const prisma = new PrismaClient();

//       const result = await prisma.product.findMany({
//     //    where:{price:{equals:20}}
//    where:{
//     // NOT:[
//     //     {fristName:{contains:'kamal'}},
//     //     {price:{gt: 80}}
//     // ]
//     // AND:[
//     //     {fristName:{contains:'kamal'}},
//     //     {price:{gt: 80}}
//     // ]
//     OR:[
//         {fristName:{contains:'kamal'}},
//         {price:{gt: 80}}
//     ]
//    }
//       });

//       return NextResponse.json({ status: "success", data: result});
//     } catch (error) {
//       return NextResponse.json({ status: "fail", data: error.toString() });
//     }
//   }

// createMany

// export async function POST(req, res) {
//     BigInt.prototype.toJSON = function () {
//       return this.toString();
//     };
//     try {
//       const prisma = new PrismaClient();
//       //   const reqBody = await req.json();

//       let result = await prisma.product.createMany({
//         data: [

//           {fristName:"kamal",metaTitle:"jamal",slug:"eeee",summary:"eeewed",price:20,discount:10,userid:1},
//           {fristName:"jamal",metaTitle:"jamal",slug:"eeee",summary:"eeewed",price:50,discount:10,userid:2},
//           {fristName:"prabon",metaTitle:"jamal",slug:"eeee",summary:"eeewed",price:20,discount:10,userid:3},
//           {fristName:"koli",metaTitle:"jamal",slug:"eeee",summary:"eeewed",price:60,discount:10,userid:4},
//           {fristName:"roni",metaTitle:"jamal",slug:"eeee",summary:"eeewed",price:20,discount:10,userid:5},
//           {fristName:"akash",metaTitle:"jamal",slug:"eeee",summary:"eeewed",price:80,discount:10,userid:6},
//           {fristName:"rahim",metaTitle:"jamal",slug:"eeee",summary:"eeewed",price:20,discount:10,userid:7},
//           {fristName:"bala",metaTitle:"jamal",slug:"eeee",summary:"eeewed",price:20,discount:10,userid:8},
//           {fristName:"shakil",metaTitle:"jamal",slug:"eeee",summary:"eeewed",price:20,discount:10,userid:9},
//           {fristName:"anawar",metaTitle:"jamal",slug:"eeee",summary:"eeewed",price:10,discount:10,userid:10},
//           {fristName:"eee",metaTitle:"jamal",slug:"eeee",summary:"eeewed",price:20,discount:10,userid:11},
//         ],
//       });

//       return NextResponse.json({ status: "success", data: result });
//     } catch (error) {
//       return NextResponse.json({ status: "fail", data: error.toString() });
//     }
//   }

// export async function POST(req, res) {
//     BigInt.prototype.toJSON = function () {
//       return this.toString();
//     };
//     try {
//       const prisma = new PrismaClient();
//       //   const reqBody = await req.json();

//       let result = await prisma.category.createMany({
//         data: [
//             {title:"edw",metaTitle:"weee",slug:"eejj",content:"dddee"},
//             {title:"edw",metaTitle:"weee",slug:"eejj",content:"dddee"},
//             {title:"edw",metaTitle:"weee",slug:"eejj",content:"dddee"},
//             {title:"edw",metaTitle:"weee",slug:"eejj",content:"dddee"},
//             {title:"edw",metaTitle:"weee",slug:"eejj",content:"dddee"},

//         ],
//       });

//       return NextResponse.json({ status: "success", data: result });
//     } catch (error) {
//       return NextResponse.json({ status: "fail", data: error.toString() });
//     }
//   }
