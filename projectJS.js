document.getElementById("submit").addEventListener('click',myWindow)
    function myWindow()
    {
        visitorName = document.getElementById("name").value;
        let dietGoal1 = document.getElementById("option1").value;
        

       

        if(dietGoal1 == true){
            mealPlan = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");
            mealPlan += ("<main>\nHello " + visitorName + ", here is your meal plan!</main>");
            mealPlan += ("\n<tr>\n<th></th>\n<th>Monday</th>\n<th>Tuesday</th>\n<th>Wednesday</th>\n<th>Thursday</th>\n<th>Friday</th>\n<th>Saturday</th>\n<th>Sunday</th>\n</tr>")
            mealPlan += ("<tr>\n<td>Breakfast</td>\n<td>Bacon and Eggs</td>\n<td>Bacon and Eggs</td>\n<td>Bacon and Eggs</td>\n<td>Bacon and Eggs</td>\n<td>Bacon and Eggs</td>\n<td>Bacon and Eggs</td>\n<td>Bacon and Eggs</td>\n</tr>")
            mealPlan += ("<tr>\n<td>Snack</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>")
            mealPlan += ("<tr>\n<td>Lunch</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>")
            mealPlan += ("<tr>\n<td>Snack</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>")
            mealPlan += ("<tr>\n<td>Dinner</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>")
            mealPlan += ("</body>\n</html>");
        }
        else {
            mealPlan = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");
            mealPlan += ("<main>\nHello " + visitorName + ", here is your meal plan!</main>");
            mealPlan += ("\n<tr>\n<th></th>\n<th>Monday</th>\n<th>Tuesday</th>\n<th>Wednesday</th>\n<th>Thursday</th>\n<th>Friday</th>\n<th>Saturday</th>\n<th>Sunday</th>\n</tr>")
            mealPlan += ("<tr>\n<td>Breakfast</td>\n<td>Bacon and Eggs</td>\n<td>Bacon and Eggs</td>\n<td>Bacon and Eggs</td>\n<td>Bacon and Eggs</td>\n<td>Bacon and Eggs</td>\n<td>Bacon and Eggs</td>\n<td>Bacon and Eggs</td>\n</tr>")
            mealPlan += ("<tr>\n<td>Snack</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>")
            mealPlan += ("<tr>\n<td>Lunch</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>")
            mealPlan += ("<tr>\n<td>Snack</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>")
            mealPlan += ("<tr>\n<td>Dinner</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>")
            mealPlan += ("</body>\n</html>");
        }

    
        flyWindow = window.open('about:blank','myPop','width=400,height=600,left=200,top=200');
        flyWindow.document.write(mealPlan);
    }