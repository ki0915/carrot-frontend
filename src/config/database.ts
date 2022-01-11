import { Sequelize } from 'sequelize-typescript';
import path from 'path';

const sequelize = new Sequelize('당근마켓', 'root', '1234', {
    dialect: 'mysql',
    models: [path.join(__dirname, '../model')],
});

export default sequelize;