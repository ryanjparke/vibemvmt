CREATE TABLE cart(
id SERIAL PRIMARY KEY,
userId INTEGER,
productId INTEGER,
FOREIGN KEY (userId) REFERENCES users(id),
FOREIGN KEY (productId) REFERENCES products(ProductId)
)











