import { Recipe } from '../types';

export const initialRecipes: Recipe[] = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        ingredients: ["8 ounces spaghetti", "2 large eggs", "½ cup freshly grated Parmesan", "4 slices bacon, diced", "4 cloves garlic, minced", "Kosher salt and freshly ground black pepper, to taste", "2 tablespoons chopped fresh parsley leaves"],
        steps: [
            "In a large pot of boiling salted water, cook pasta according to package instructions; reserve 1/2 cup water and drain well.",
            "In a small bowl, whisk together eggs and Parmesan; set aside.",
            "Heat a large cast iron skillet over medium high heat. Add bacon and cook until brown and crispy, about 6-8 minutes; reserve excess fat.",
            "Stir in garlic until fragrant, about 1 minute. Reduce heat to low.",
            "Working quickly, stir in pasta and egg mixture, and gently toss to combine; season with salt and pepper, to taste. Add reserved pasta water, one tablespoon at a time, until desired consistency is reached.",
            "Serve immediately, garnished with parsley, if desired."
        ],
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
        mealType: "Dinner",
        rating: 5
    },
    {
        id: 2,
        name: "Chicken Curry",
        ingredients: ["chicken", "curry powder", "coconut milk", "onions", "garlic", "ginger", "vegetable oil", "salt"],
        steps: [
            "Dice chicken into bite-sized pieces.",
            "Heat oil in a large pan over medium heat.",
            "Sauté diced onions until translucent.",
            "Add minced garlic and grated ginger, cook for 1 minute.",
            "Add curry powder and stir for 30 seconds until fragrant.",
            "Add chicken pieces and cook until they start to brown.",
            "Pour in coconut milk and bring to a simmer.",
            "Reduce heat and cook for 15-20 minutes until chicken is cooked through.",
            "Season with salt to taste.",
            "Serve hot with rice or naan bread."
        ],
        image: "https://images.unsplash.com/photo-1697155406127-76096502d69d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        mealType: "Dinner",
        rating: 5
    },
    {
        id: 3,
        name: "Vegetable Stir Fry",
        ingredients: ["mixed vegetables", "soy sauce", "ginger", "garlic", "sesame oil", "vegetable oil", "cornstarch"],
        steps: [
            "Wash and chop mixed vegetables into bite-sized pieces.",
            "Mix soy sauce, minced garlic, grated ginger, and a bit of cornstarch in a small bowl.",
            "Heat vegetable oil in a wok or large frying pan over high heat.",
            "Add vegetables to the hot oil, starting with the ones that take longer to cook.",
            "Stir fry vegetables for 3-5 minutes until they start to soften.",
            "Pour the sauce mixture over the vegetables.",
            "Continue to stir fry for another 2-3 minutes until vegetables are crisp-tender.",
            "Drizzle with sesame oil and toss to combine.",
            "Serve hot as a side dish or over rice for a main course."
        ],
        image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
        mealType: "Dinner",
        rating: 1
    },
    {
        id: 4,
        name: "Chocolate Chip Cookies",
        ingredients: ["flour", "butter", "brown sugar", "white sugar", "eggs", "vanilla extract", "baking soda", "salt", "chocolate chips"],
        steps: [
            "Preheat oven to 375°F (190°C).",
            "Cream together butter, brown sugar, and white sugar until smooth.",
            "Beat in eggs one at a time, then stir in vanilla.",
            "Dissolve baking soda in hot water and add to batter along with salt.",
            "Stir in flour and chocolate chips.",
            "Drop by large spoonfuls onto ungreased pans.",
            "Bake for about 10 minutes or until edges are nicely browned.",
            "Let cool on baking sheet for 5 minutes before transferring to a wire rack."
        ],
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        mealType: "Dessert",
        rating: 4
    },
    {
        id: 5,
        name: "Greek Salad",
        ingredients: ["cucumber", "tomatoes", "red onion", "feta cheese", "kalamata olives", "extra virgin olive oil", "red wine vinegar", "dried oregano", "salt", "black pepper"],
        steps: [
            "Chop cucumber, tomatoes, and red onion into bite-sized pieces.",
            "Combine vegetables in a large bowl.",
            "Add crumbled feta cheese and kalamata olives.",
            "In a small bowl, whisk together olive oil, red wine vinegar, dried oregano, salt, and pepper.",
            "Pour dressing over the salad and toss gently to combine.",
            "Chill for at least 30 minutes before serving to allow flavors to meld.",
            "Serve cold and enjoy your refreshing Greek salad!"
        ],
        image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        mealType: "Appetizer",
        rating: 5
    }
];