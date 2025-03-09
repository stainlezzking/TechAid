"use server";

export async function fetchGet(path, token) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    console.log(response);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
    return { success: false, message: err.message };
  }
}
