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
        ingredients: ["3 tablespoons olive oil", "1 small onion, chopped", "3 tablespoons curry powder", "1 teaspoon ground cinnamon", "1 teaspoon paprika", "1 bay leaf", "½ teaspoongrated fresh ginger root", "½ teaspoonwhite sugar", "salt to taste", "2 skinless, boneless chicken breast halves - cut into bite-size pieces", "1 tablespoon tomato paste", "1 cup plain yogurt", "¾ cup coconut milk", "½ lemon, juiced", "½ teaspoon cayenne pepper"],
        steps: [
            "Heat olive oil in a skillet over medium heat. Sauté onion until lightly browned.",
            "Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar, and salt. Continue stirring for 2 minutes.",
            "Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes.",
            "Remove bay leaf, and stir in lemon juice and cayenne pepper. Simmer 5 more minutes.",
            "Serve hot and enjoy! ",
        ],
        image: "https://images.unsplash.com/photo-1697155406127-76096502d69d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        mealType: "Dinner",
        rating: 5
    },
    {
        id: 3,
        name: "Vegetable Stir Fry",
        ingredients: ["1 tablespoon olive oil", "1 red bell pepper, sliced", "1 cup sugar snap peas", "1 cup carrots, sliced", "▢ 1 cup mushrooms, sliced", "2 cups broccoli", "1 cup baby corn", "1/2 cup water chestnuts", "¼ cup soy sauce", "3 garlic cloves, minced", "3 tablespoons brown sugar", "1 teaspoon sesame oil", "1/2 cup chicken broth", "1 tablespoon cornstarch", "▢ chopped green onions and sesame seeds for garnish optional"],
        steps: [
            "Add one tablespoon of olive oil over medium-high heat in a wok or large skillet. Add bell pepper, peas, carrots, mushrooms, broccoli, baby corn, and water chestnuts. Sauté 2-3 minutes until veggies are almost tender.",
            "In a small bowl, whisk together soy sauce, garlic, brown sugar, sesame oil, chicken broth, and cornstarch.",
            "Pour over veggies and cook until the sauce has thickened. Garnish with chopped green onions and sesame seeds if desired"
        ],
        image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
        mealType: "Dinner",
        rating: 3
    },
    {
        id: 4,
        name: "Chocolate Chip Cookies",
        ingredients: ["1 cup salted butter softened", "1 cup granulated sugar", "1 cup light brown sugar packed", "2 teaspoons pure vanilla extract", "2 large eggs", "3 cups all-purpose flour", "1 teaspoon baking soda", "½ teaspoon baking powder", "1 teaspoon sea salt", "2 cups chocolate chips (14 oz)"],
        steps: [
            "Preheat oven to 375°F (190°C). Line three baking sheets with parchment paper and set aside.",
            "In a medium bowl mix flour, baking soda, baking powder and salt. Set aside.",
            "Cream together butter and sugars until combined.",
            "Beat in eggs and vanilla until light (about 1 minute).",
            "Mix in the dry ingredients until combined.",
            "Add chocolate chips and mix well.",
            "Roll 2-3 Tablespoons (depending on how large you like your cookies) of dough at a time into balls and place them evenly spaced on your prepared cookie sheets. ",
            "Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just barely starting to turn brown.",
            "Let them sit on the baking pan for 5 minutes before removing to cooling rack."
        ],
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        mealType: "Dessert",
        rating: 4
    },
    {
        id: 5,
        name: "Greek Salad",
        ingredients: ["¼ cup extra-virgin olive oil", "3 tablespoons red wine vinegar", "1 garlic clove, minced", "½ teaspoon dried oregano, more for sprinkling", "¼ teaspoon Dijon mustard", "¼ teaspoon sea salt", "Freshly ground black pepper", "1 English cucumber, cut lengthwise, seeded, and sliced ¼-inch thick", "1 green bell pepper, chopped into 1-inch pieces", "2 cups halved cherry tomatoes", "5 ounces feta cheese, cut into ½ inch cubes*", "⅓ cup thinly sliced red onion", "⅓ cup pitted Kalamata olives", "⅓ cup fresh mint leaves"],
        steps: [
            "Make the dressing: In a small bowl, whisk together the olive oil, vinegar, garlic, oregano, mustard, salt, and several grinds of pepper.",
            "On a large platter, arrange the cucumber, green pepper, cherry tomatoes, feta cheese, red onions, and olives. Drizzle with the dressing and very gently toss. Sprinkle with a few generous pinches of oregano and top with the mint leaves. Season to taste and serve.",
            "Serve cold and enjoy your refreshing Greek salad!"
        ],
        image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        mealType: "Appetizer",
        rating: 5
    },
    {
    id: 6,
        name: "Ron's AI-Wizard Chocolate Chip Spice Cake",
        ingredients: ["2¾ cups all-purpose flour", "2 teaspoons baking powder", "½ teaspoon baking soda", "1½ teaspoons ground cinnamon", "1 teaspoon ground ginger", "½ teaspoon ground nutmeg", "¼ teaspoon ground cloves", "¼ teaspoon ground cardamom", "1 teaspoon salt", "¾ cup unsalted butter, softened", "½ cup vegetable oil", "1½ cups dark brown sugar, packed", "½ cup granulated sugar", "4 large eggs, room temperature", "2 teaspoons vanilla extract", "1¼ cups whole milk, room temperature", "½ cup apple sauce", "¼ cup maple syrup", "1½ cups semi-sweet chocolate chips", "2 tablespoons all-purpose flour (for coating chocolate chips)", "2 cups (4 sticks) unsalted butter", "6 cups powdered sugar, sifted", "2 tablespoons vanilla extract", "¼ cup heavy cream", "½ teaspoon salt", "Additional chocolate chips for garnish" ],
        steps: [
            "Preheat oven to 350°F (175°C). Grease and flour two 9-inch cake pans, line bottoms with parchment paper.",
            "In a medium bowl, whisk together flour, baking powder, baking soda, cinnamon, ginger, nutmeg, cloves, cardamom, and salt.",
            "In a separate bowl, toss chocolate chips with 2 tablespoons flour to prevent sinking.",
            "Using a stand mixer with paddle attachment: Beat butter until creamy (2 minutes), Add vegetable oil and beat until combined, Add both sugars, beat until light and fluffy (4-5 minutes), Add eggs one at a time, beating well after each, Beat in vanilla extract and maple syrup",
            "Combine milk and apple sauce in a measuring cup, whisk until smooth.",
            "Gradually alternate adding dry ingredients and milk mixture to butter mixture: Begin and end with dry ingredients (three additions of dry, two of wet), Mix on low speed until just combined, Fold in flour-coated chocolate chips by hand",
            "Divide batter between prepared pans.",
            "Bake 30-35 minutes or until a toothpick comes out clean.",
            "Cool in pans for 10 minutes, then remove and cool completely on wire racks.",
            "Brown the butter: Place butter in a light-colored saucepan over medium heat, Cook, stirring constantly, until butter turns golden brown and smells nutty (about 8-10 minutes), Pour into a heatproof bowl, including the browned bits, Refrigerate until solid but still soft (about 1 hour)",
            "Make the frosting: Beat cooled brown butter until creamy (3-4 minutes), Gradually add sifted powdered sugar, one cup at a time, Add vanilla extract, Add heavy cream gradually until desired consistency is reached, Beat until light and fluffy (5-6 minutes), Mix in salt",
            "Level cake layers if needed",
            "Place first layer on cake stand",
            "Spread 1 cup frosting",
            "Add second layer",
            "Frost entire cake",
            "Garnish with additional chocolate chips"
        ],
        image: "https://scontent.fyxd2-1.fna.fbcdn.net/v/t39.30808-6/464190923_10162338058444439_6319982449226737433_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BvnQEu8K__EQ7kNvgHOOGTQ&_nc_zt=23&_nc_ht=scontent.fyxd2-1.fna&_nc_gid=Ay0yqls_saW2h_9mcgOlxv3&oh=00_AYBwu1cS2-f17fN9q4VMfAVEp2ldGFPNGGBRQBfSi2NiQg&oe=671E2C96",
        mealType: "Desserts",
        rating: 1
    }
];