<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>eCommerce Landing Page</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        header {
            background-color: #333;
            color: white;
            padding: 10px;
        }
        .product {
            margin: 20px;
        }
        .main-image {
            width: 300px;
            border-radius: 10px;
        }
        .description {
            font-size: 18px;
            margin: 10px 0;
        }
        .price {
            font-size: 22px;
            font-weight: bold;
            color: #d9534f;
        }
        button {
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #218838;
        }
        .images img {
            width: 100px;
            margin: 10px;
            border-radius: 5px;
        }
        .cta a {
            display: inline-block;
            margin: 10px;
            color: #007bff;
            text-decoration: none;
            font-size: 18px;
        }
        .cta a:hover {
            text-decoration: underline;
        }
        .reviews {
            margin: 20px;
            font-size: 18px;
        }
        .newsletter {
            margin: 20px;
        }
        .newsletter input {
            padding: 8px;
            width: 200px;
            margin-right: 10px;
        }
        .newsletter button {
            background-color: #007bff;
        }
        .newsletter button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <header>
        <h1>Stylish Sneakers</h1>
    </header>
    
    <section class="product">
        <img src="sneaker.jpg" alt="Stylish Sneakers" class="main-image">
        <p class="description">Experience comfort and style with our premium sneakers, designed for all-day wear.</p>
        <p class="price">Price: $49.99</p>
        <button id="addToCart">Add to Cart</button>
    </section>
    
    <section class="images">
        <img src="sneaker1.jpg" alt="Sneaker Side View">
        <img src="sneaker2.jpg" alt="Sneaker Back View">
    </section>
    
    <section class="cta">
        <a href="#" class="learn-more">Learn More</a>
        <a href="#" class="contact">Contact Us</a>
    </section>
    
    <section class="reviews">
        <h2>Customer Reviews</h2>
        <p>⭐⭐⭐⭐⭐ "Super comfy and stylish!" - Alex</p>
    </section>
    
    <section class="newsletter">
        <h2>Subscribe for Updates</h2>
        <input type="email" id="email" placeholder="Enter your email">
        <button id="subscribeBtn">Subscribe</button>
    </section>
</body>
</html>
