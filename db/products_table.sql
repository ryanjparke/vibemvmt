CREATE TABLE products(
ProductId SERIAL PRIMARY KEY,
ProductName varchar(100),
Price money NUll,
ProductDescription text NULL
)


-- INSERT INTO products (ProductId, ProductName, price, ProductDescription)
-- VALUES
-- (10, 'Cloud Grey Tee', 30.00, 'Cloud grey tribe tee')