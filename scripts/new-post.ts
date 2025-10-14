import fs from "fs";
import path from "path";

function toISOStringWithTimezone(date: Date): string {
  const year = date.getFullYear().toString();
  const month = zeroPadding((date.getMonth() + 1).toString());
  const day = zeroPadding(date.getDate().toString());

  const hour = zeroPadding(date.getHours().toString());
  const minute = zeroPadding(date.getMinutes().toString());
  const second = zeroPadding(date.getSeconds().toString());

  const localDate = `${year}-${month}-${day}`;
  const localTime = `${hour}:${minute}:${second}`;

  const diffFromUtc = date.getTimezoneOffset();

  // UTCだった場合
  if (diffFromUtc === 0) {
    const tzSign = 'Z';
    return `${localDate}T${localTime}${tzSign}`;
  }

  // UTCではない場合
  const tzSign = diffFromUtc < 0 ? '+' : '-';
  const tzHour = zeroPadding((Math.abs(diffFromUtc) / 60).toString());
  const tzMinute = zeroPadding((Math.abs(diffFromUtc) % 60).toString());

  return `${localDate}T${localTime}${tzSign}${tzHour}:${tzMinute}`;
}

function zeroPadding(s: string): string {
  return ('0' + s).slice(-2);
}

/** ISO8601 string */
function getDate(): string {
  const today = new Date();
  const jpIso = toISOStringWithTimezone(today)

  return jpIso;
}

// コマンドライン引数（node, script, ...args）の3つ目以降を取得
const args: string[] = process.argv.slice(2);

if (args.length === 0) {
  console.error(`Error: No filename argument provided
Usage: npm run new-post -- <filename>`);
  process.exit(1);
}

let fileName: string = args[0];

// .md もしくは .mdx が拡張子としてついていなければ追加する
const fileExtensionRegex: RegExp = /\.(md|mdx)$/i;
if (!fileExtensionRegex.test(fileName)) {
  fileName += ".md";
}

const targetDir: string = "./src/data/blog/";
const fullPath: string = path.join(targetDir, fileName);

// 既にファイルが存在する場合はエラーで終了
if (fs.existsSync(fullPath)) {
  console.error(`Error: File ${fullPath} already exists`);
  process.exit(1);
}

// ディレクトリが存在しない場合は再帰的に作成
const dirPath: string = path.dirname(fullPath);
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

// Markdownファイルの初期内容
const content: string = `---
author: yukisakk
pubDatetime: ${getDate()}
title: ${args[0]}
featured: false
draft: false
tags: []
description: ''
---
`;

// ファイル作成
fs.writeFileSync(fullPath, content);

console.log(`Post ${fullPath} created`); // eslint-disable-line no-console
