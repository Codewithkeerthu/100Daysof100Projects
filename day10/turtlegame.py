#WELCOME TO TURTLE GAME DONE BY KEERTHANA S
#IMPORT TURTLE MODULE 
from turtle import Turtle,Screen
#IMPORT RANDOM MODULE
from random import randint
#PRINT LOGO FOR TURTLE GAME
print("""
  __                 __  .__                               .__       .___
_/  |_ __ __________/  |_|  |   ____   __  _  _____________|  |    __| _/
\   __\  |  \_  __ \   __\  | _/ __ \  \ \/ \/ /  _ \_  __ \  |   / __ | 
 |  | |  |  /|  | \/|  | |  |_\  ___/   \     (  <_> )  | \/  |__/ /_/ | 
 |__| |____/ |__|   |__| |____/\___  >   \/\_/ \____/|__|  |____/\____ | .....
                                   \/                                 \/ 
""")

print("WELCOME TO TURTLE GAME...BET AND WIN...")
print("DONE BY KEERTHANA S")
print("Availabe Turtle Colors:")
print("blue ,red ,green ,purple ,orange ,black")
screen=Screen()
#SETUP METHOD IS USED FOR SET SCREEN HEIGHT AND WIDHT
screen.setup(width=600,height=400)

#BGPIC IS USED TO SET THE BACKGROUND IMAGE
screen.bgpic("b.gif")

user_bet=screen.textinput(title="Make Your Bet",prompt="which turtle will win the race? enter a color:")

all_turtle=[]
race=False
colors=["blue","red","green","purple","orange","black"]
y_positions=[-80,-40,0,40,80,120]

#FOR LOOP IS USED FOR 6 ITERATE 
for index in range(0,6):
    new_turtle=Turtle()
    new_turtle.shape("turtle")
    new_turtle.color(colors[index])
    new_turtle.penup()
    new_turtle.goto(x=-285,y=y_positions[index])
    all_turtle.append(new_turtle)

if user_bet:
    race=True

while race:
    for turtle in all_turtle:
        
        if turtle.xcor()>275:
            race=False
            win=turtle.pencolor()
            if win==user_bet:
                print(f"you've won! the {win} turtle is the winner")
            else:
                print(f"you've lost! the {win} turtle is the winner")
        distance=randint(0,10)
        turtle.forward(distance)
    

screen.exitonclick()

