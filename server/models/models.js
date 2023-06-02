const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const FavouriteList = sequelize.define("favourites_list", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const FavouriteProduct = sequelize.define("favourite_product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Product = sequelize.define("product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sku: { type: DataTypes.STRING, unique: true, allowNull: false },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.STRING, defaultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define("type", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Material = sequelize.define("material", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
}); 

const Rating = sequelize.define("rating", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
});

const ProductInfo = sequelize.define("product_info", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
});

const TypeMaterial = sequelize.define("type_material", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(FavouriteList);
FavouriteList.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

FavouriteList.hasMany(FavouriteProduct);
FavouriteProduct.belongsTo(FavouriteList);

Material.hasMany(Product);
Product.belongsTo(Material);

Type.hasMany(Product);
Product.belongsTo(Type);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(FavouriteProduct);
FavouriteProduct.belongsTo(Product);

Product.hasMany(ProductInfo, { as: "info" });
ProductInfo.belongsTo(Product);

Type.belongsToMany(Material, { through: TypeMaterial });
Material.belongsToMany(Type, { through: TypeMaterial });

module.exports = {
    User,
    FavouriteList,
    FavouriteProduct,
    Product,
    Type,
    Material,
    Rating,
    TypeMaterial,
    ProductInfo,
};
