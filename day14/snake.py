# My Snake Game....
# created by S.KEERTHANA...
import pygame
import time
import sys
import random

# Initialize pygame
pygame.init()

# Play Surface
PlaySurface = pygame.display.set_mode((900, 600))  # Increased screen size
pygame.display.set_caption('Snake Game')

# Load the background image
background_image = pygame.image.load('bg.jpg')  # Add your background image path here

# Colors
red = pygame.Color(255, 0, 0)  # Game Over text
green = pygame.Color(0, 255, 0)  # Snake
black = pygame.Color(255, 255, 255)  # Score text
blue = pygame.Color(0, 255, 255)  # Food

# FPS controller
fpsController = pygame.time.Clock()

# Snake initial position and body
SnakePos = [100, 50]
SnakeBody = [[100, 50], [90, 50], [80, 50]]

# Initial food position
FoodPos = [random.randrange(1, 90) * 10, random.randrange(1, 60) * 10]  # Adjusted food spawn area
FoodSpawn = True

# Initial direction and score
direction = 'RIGHT'
change_to = direction
score = 0

# Display welcome message
PlaySurface.blit(background_image, (0, 0))
pfont = pygame.font.SysFont('monaco', 35)
pSurf = pfont.render('Welcome to Snake Game', True, red)
pSurff= pfont.render('Created By Keerthu', True, red)

pRect = pSurf.get_rect()
pRectt = pSurff.get_rect()
pRect.midtop = (450, 250)  # Adjusted to center on new screen size
pRectt.midtop = (450, 300)
PlaySurface.blit(pSurf, pRect)
PlaySurface.blit(pSurff, pRectt)
pygame.display.flip()
time.sleep(3)

# Game over function
def gameOver():
    gFont = pygame.font.SysFont('Arial Black', 72)
    GOsurf = gFont.render('Game Over!', True, red)
    GOrect = GOsurf.get_rect()
    GOrect.midtop = (450, 15)  # Centered on new screen size
    PlaySurface.blit(GOsurf, GOrect)
    showScore(0)
    pygame.display.flip()
    time.sleep(2)
    pygame.quit()
    sys.exit()

# Show score function
def showScore(choice=1):
    sFont = pygame.font.SysFont('monaco', 24)
    sfFont = pygame.font.SysFont('monaco', 42)
    Ssurf = sFont.render('Score : {0}'.format(score), True, black)
    Srect = Ssurf.get_rect()
    if choice == 1:
        Srect.midtop = (40, 10)
    else:
        Ssurf = sfFont.render('Score : {0}'.format(score), True, black)
        Srect.midtop = (450, 120)  # Centered on new screen size
    PlaySurface.blit(Ssurf, Srect)

# Main game loop
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_RIGHT or event.key == ord('d'):
                change_to = 'RIGHT'
            if event.key == pygame.K_LEFT or event.key == ord('a'):
                change_to = 'LEFT'
            if event.key == pygame.K_UP or event.key == ord('w'):
                change_to = 'UP'
            if event.key == pygame.K_DOWN or event.key == ord('s'):
                change_to = 'DOWN'
            if event.key == pygame.K_ESCAPE:
                pygame.event.post(pygame.event.Event(pygame.QUIT))

    # Validate direction changes
    if change_to == 'RIGHT' and not direction == 'LEFT':
        direction = 'RIGHT'
    if change_to == 'LEFT' and not direction == 'RIGHT':
        direction = 'LEFT'
    if change_to == 'UP' and not direction == 'DOWN':
        direction = 'UP'
    if change_to == 'DOWN' and not direction == 'UP':
        direction = 'DOWN'

    # Update snake position
    if direction == 'RIGHT':
        SnakePos[0] += 10
    if direction == 'LEFT':
        SnakePos[0] -= 10
    if direction == 'UP':
        SnakePos[1] -= 10
    if direction == 'DOWN':
        SnakePos[1] += 10

    # Snake body growing mechanism
    SnakeBody.insert(0, list(SnakePos))
    if SnakePos[0] == FoodPos[0] and SnakePos[1] == FoodPos[1]:
        score += 1
        FoodSpawn = False
    else:
        SnakeBody.pop()

    # Food spawn logic
    if not FoodSpawn:
        FoodPos = [random.randrange(1, 90) * 10, random.randrange(1, 60) * 10]  # Adjusted food spawn area
    FoodSpawn = True

    # Draw everything
    PlaySurface.blit(background_image, (0, 0))  # Display background image

    #for example SnakeBody = [[100, 50], [90, 50], [80, 50]]
    #pos[0]: This refers to the X-coordinate of the current body segment.
    #pos[1]: This refers to the Y-coordinate of the current body segment.
    for pos in SnakeBody:
        pygame.draw.rect(PlaySurface, green, pygame.Rect(pos[0], pos[1], 10, 10))

    pygame.draw.rect(PlaySurface, blue, pygame.Rect(FoodPos[0], FoodPos[1], 10, 10))

    # Game Over conditions
    if SnakePos[0] > 890 or SnakePos[0] < 0 or SnakePos[1] > 590 or SnakePos[1] < 0:  # Adjusted for new screen size
        gameOver()
    
    for block in SnakeBody[1:]:
        if SnakePos[0] == block[0] and SnakePos[1] == block[1]:
            gameOver()

    # Display score
    showScore()
    pygame.display.flip()
    fpsController.tick(10)  # Slowing down the game speed to 10 FPS
