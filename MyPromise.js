// สร้าง Promise

const connect = true; // เช็คว่าต่อเน็ต
const url1 = "kong.dev/file1.json";
const url2 = "kong.dev/file2.json";
const url3 = "kong.dev/file3.json";
const url4 = "kong.dev/file4.json";
const url5 = "kong.dev/file5.json";
function downloading(url) {
    return new Promise(function (resolve, reject) {
        console.log(`กำลังโหลดไฟล์จาก ${url}`);
        setTimeout(() => {
            if (connect) {
                resolve(`โหลด ${url} เรียบร้อย`);
            } else {
                reject("เกิดข้อผิดพลาด");
            };
        }, 1000);
    });
};

// Async & Await

async function start() {
    console.log(await downloading(url1));
    console.log(await downloading(url2));
    console.log(await downloading(url3));
};

start();



// api ภาพสินค้า (backend) -> frontend (แสดงภาพในเว็บ)

// api (promise) -> (pending) -> รอข้อมูลมาครบ -> แสดงภาพ

// loading..... -> แสดงภาพ