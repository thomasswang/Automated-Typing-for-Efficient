import pyautogui, time

position = pyautogui.position()
pesan = "text message "

for a in range(1, 6):
    pyautogui.click(position.x, position.y)
    pyautogui.typewrite(pesan + " (" + str(a) + ")")
    print(pesan + " (" + str(a) + ")")
    time.sleep(0.5)
    pyautogui.press("enter")
