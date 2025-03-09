"use server";

import authOptions from "@/auth";
import { getServerSession } from "next-auth";

export async function fetchGet(path, token) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.token) {
    return {
      unauthorized: true,
    };
  }
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
      method: "GET",
      headers: {
        Authorization: session.user.token,
      },
    });

    const data = await response.json();

    return data;
  } catch (err) {
    return { success: false, message: err.message };
  }
}

export const FetchAuthPost = async function (path, data) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.token) {
    return {
      unauthorized: true,
    };
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: session.user.token },
    body: JSON.stringify(data),
  })
    .then((d) => d.json())
    .catch((err) => {
      return { err, success: false, message: err.message };
    });
  return response;
};

export const FetchAuthPut = async function (path, data) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.token) {
    return {
      unauthorized: true,
    };
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: session.user.token },
    body: JSON.stringify(data),
  })
    .then((d) => d.json())
    .catch((err) => {
      return { err, success: false, message: err.message };
    });
  return response;
};
