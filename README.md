# list-editor
Trying to create an editable list. Testing js skills.

## Description
Basic editable list. Web page allows the user to rename their custom list, then add and remove items. Items can be added with the '+ Item' green button. Individual items can be removed with the 'X' red button. Text can be edited by clicking on it, changes are submitted by hitting return or clicking out of the text box.

Please note, this is just to put some of my learnings to a practical project. **This web page will not save user data, any page refresh will delete the entire list.**

## Future Ideas and Updates
Lots of improvements that could be made, but I would like to continue learning with other lessons and then come back for improvements.
- Style
    - Update styles for text boxes
        - Especially the h1 text box, it would be nice if it was the same size as the text
    - Change List Theme
        - Add a color picker to change the font color of the list title.
    - Stylize the background
        - Maybe add some gradient vector to the background to make it look a little better. 
- Function
    - Save User Data
        - List deletes upon refresh, it would be nice if it could be stored a little longer.
    - Re-organize List
        - Desire to drag and drop list items into a new order.
    - Allow user to create more than one list
- Other
    - Refactor JS
        - I'm sure there is a way to consolidate the text swap
        - Also doesn't seem like good practice to fire a click event to get the text dialog to come up first for a new item. Kind of a dirty way to do it.
