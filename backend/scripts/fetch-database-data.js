#!/usr/bin/env node

/**
 * Script để lấy và hiển thị dữ liệu từ tất cả các bảng trong database
 * Chạy: node scripts/fetch-database-data.js
 */

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(
    "Lỗi: Không tìm thấy SUPABASE_URL hoặc SUPABASE_PUBLISHABLE_KEY trong file .env"
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Danh sách các bảng cần lấy dữ liệu
const TABLES = [
  "type_account",
  "account",
  "students",
  "bus",
  "routes",
  "schedule",
];

// Hàm format dữ liệu thành bảng Markdown
function formatAsMarkdownTable(data, tableName) {
  if (!data || data.length === 0) {
    return `\n**Không có dữ liệu trong bảng \`${tableName}\`**\n`;
  }

  const headers = Object.keys(data[0]);

  // Header row
  let table = "\n| " + headers.join(" | ") + " |\n";

  // Separator row
  table += "|" + headers.map(() => " --- ").join("|") + "|\n";

  // Data rows
  data.forEach((row) => {
    const values = headers.map((header) => {
      const value = row[header];
      // Format giá trị
      if (value === null) return "NULL";
      if (typeof value === "object") return JSON.stringify(value);
      return String(value);
    });
    table += "| " + values.join(" | ") + " |\n";
  });

  return table;
}

// Hàm lấy dữ liệu từ tất cả các bảng
async function fetchAllData() {
  const results = {};

  for (const table of TABLES) {
    try {
      console.log(`Đang lấy dữ liệu từ bảng: ${table}...`);
      const { data, error } = await supabase.from(table).select("*");

      if (error) {
        console.error(`Lỗi khi lấy dữ liệu từ ${table}:`, error.message);
        results[table] = { error: error.message, data: [] };
      } else {
        console.log(`✓ Lấy được ${data.length} records từ ${table}`);
        results[table] = { data, count: data.length };
      }
    } catch (err) {
      console.error(`Exception khi lấy ${table}:`, err.message);
      results[table] = { error: err.message, data: [] };
    }
  }

  return results;
}

// Tạo file Markdown với dữ liệu
async function generateMarkdownFile() {
  console.log("Bắt đầu lấy dữ liệu từ database...\n");

  const results = await fetchAllData();
  const timestamp = new Date().toLocaleString("vi-VN");

  let markdown = `# DATABASE DATA - Smart Bus System

> **Last Updated**: ${timestamp}  
> **Auto-generated**: Chạy \`npm run db:fetch\` để cập nhật

---

## Tổng quan

`;

  // Tổng quan số lượng
  let overview = "| Bảng | Số lượng records |\n| --- | --- |\n";
  for (const [table, result] of Object.entries(results)) {
    overview += `| \`${table}\` | ${result.count || 0} |\n`;
  }
  markdown += overview + "\n---\n\n";

  // Chi tiết từng bảng
  markdown += `## Dữ liệu các bảng\n\n`;

  // 1. type_account
  markdown += `### 1. Bảng \`type_account\`\n\n`;
  markdown += formatAsMarkdownTable(results.type_account.data, "type_account");
  markdown += `\n---\n\n`;

  // 2. account
  markdown += `### 2. Bảng \`account\`\n\n`;
  markdown += formatAsMarkdownTable(results.account.data, "account");
  markdown += `\n---\n\n`;

  // 3. students
  markdown += `### 3. Bảng \`students\`\n\n`;
  markdown += formatAsMarkdownTable(results.students.data, "students");
  markdown += `\n---\n\n`;

  // 4. bus
  markdown += `### 4. Bảng \`bus\`\n\n`;
  markdown += formatAsMarkdownTable(results.bus.data, "bus");
  markdown += `\n---\n\n`;

  // 5. routes
  markdown += `### 5. Bảng \`routes\`\n\n`;
  markdown += formatAsMarkdownTable(results.routes.data, "routes");
  markdown += `\n---\n\n`;

  // 6. schedule
  markdown += `### 6. Bảng \`schedule\`\n\n`;
  markdown += formatAsMarkdownTable(results.schedule.data, "schedule");
  markdown += `\n---\n\n`;

  // Hướng dẫn
  markdown += `## Cách cập nhật dữ liệu

### Tự động (Khuyên dùng)
\`\`\`bash
cd /home/thanhhai/Documents/CNPM/CNPM/backend
npm run db:fetch
\`\`\`

### Thủ công - Kiểm tra từng bảng trên Terminal

\`\`\`bash
# Chuẩn bị (lấy DATABASE_URL từ file .env)
export DATABASE_URL="your_supabase_connection_string"

# Xem từng bảng
psql $DATABASE_URL -c "SELECT * FROM type_account;"
psql $DATABASE_URL -c "SELECT * FROM account;"
psql $DATABASE_URL -c "SELECT * FROM students;"
psql $DATABASE_URL -c "SELECT * FROM bus;"
psql $DATABASE_URL -c "SELECT * FROM routes;"
psql $DATABASE_URL -c "SELECT * FROM schedule;"

# Xem tổng quan
psql $DATABASE_URL -c "SELECT 
  (SELECT COUNT(*) FROM account) as accounts,
  (SELECT COUNT(*) FROM students) as students,
  (SELECT COUNT(*) FROM bus) as buses,
  (SELECT COUNT(*) FROM routes) as routes,
  (SELECT COUNT(*) FROM schedule) as schedules;"
\`\`\`

### Hoặc dùng Supabase CLI
\`\`\`bash
npm install -g supabase
supabase link --project-ref your-project-ref
supabase db query "SELECT * FROM type_account;"
\`\`\`

---

*File này được tạo tự động bởi \`scripts/fetch-database-data.js\`*
`;

  // Ghi file
  const outputPath = path.join(__dirname, "..", "DATABASE_DATA.md");
  fs.writeFileSync(outputPath, markdown, "utf8");

  console.log(`\nĐã tạo file thành công: ${outputPath}`);
  console.log(`File chứa ${Object.keys(results).length} bảng dữ liệu`);
  console.log(`\nMở file để xem dữ liệu: DATABASE_DATA.md\n`);
}

// Chạy script
generateMarkdownFile()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Lỗi:", err);
    process.exit(1);
  });
