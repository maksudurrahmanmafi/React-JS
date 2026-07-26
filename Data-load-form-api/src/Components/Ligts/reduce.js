const products = [
  { id: 1, brand: "Apple" },
  { id: 2, brand: "Samsung" },
  { id: 3, brand: "Apple" },
  { id: 4, brand: "Xiaomi" },
  { id: 5, brand: "Samsung" },
  { id: 6, brand: "Apple" }
];
const result = products.reduce((acc,cur)=>{
    acc[cur.brand] = (acc[cur.brand] || 0) + 1
    return acc 
},{})
console.log(result);
