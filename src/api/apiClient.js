"use client";

export async function getPostDetails(slug) {
    return new Promise((resolve, reject) => {
        fetch(`https://kb.safelearners.co.in/api/kbworld/viewPostDetails/${slug}`)
            .then(res => {
                if (res.status == 200) {
                    return res.json();
                } else {
                    throw new Error("Response status is not 200");
                }
            })
            .then(data => {
                // console.log(data?.response);
                resolve(data?.response);
            })
            .catch(err => {
                // console.log("ERROR", err);
                reject(err);
            });
    });
}
