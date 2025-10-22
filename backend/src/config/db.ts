import { Sequelize } from "sequelize";
import  dotenv from "dotenv";

dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,
    {
        host:process.env.DB_HOST as string,
        dialect:process.env.DB_DIALECT as any,
        logging: false,
    }
)

try {
    await sequelize.authenticate();
    console.log("kết nối mysql bằng sequelize thành công")
} catch(err) {
    console.error("Lỗi kết nối", err)
    process.exit(1)
}

export default sequelize;