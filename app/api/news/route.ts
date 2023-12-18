// This is used to be able to run the json server on vercel
import db from "../../../fake-server/db.json";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const qInTitle = searchParams.get("qInTitle");
  let response = {};
  if (!category && !qInTitle) {
    response = db.news;
  } else {
    if (category) {
      response = db[category as keyof typeof db];
    } else if (qInTitle) {
      response = db[encodeURIComponent(qInTitle) as keyof typeof db];
    }
  }
  return NextResponse.json(response);
};
