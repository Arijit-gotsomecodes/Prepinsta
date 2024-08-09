document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = '/api/food'; // Base URL for API requests

    const addFoodForm = document.getElementById('addFoodForm');
    const foodTableBody = document.querySelector('#foodTable tbody');

    // Fetch all food items and populate the table
    const fetchFoodItems = async () => {
        try {
            const response = await fetch(`${apiUrl}/all`);
            const data = await response.json();
            foodTableBody.innerHTML = data.map(item => `
                <tr>
                    <td>${item.foodItemName}</td>
                    <td>${item.foodGroup}</td>
                    <td>${item.description}</td>
                    <td>
                        <button class="action-btn" onclick="editFood('${item._id}')">Edit</button>
                        <button class="action-btn" onclick="deleteFood('${item._id}')">Delete</button>
                    </td>
                </tr>
            `).join('');
        } catch (error) {
            console.error('Error fetching food items:', error);
        }
    };

    // Add a new food item
    addFoodForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const foodItem = {
            foodItemName: document.getElementById('foodItemName').value,
            foodGroup: document.getElementById('foodGroup').value,
            description: document.getElementById('description').value,
            // Add other fields as necessary
        };

        try {
            await fetch(`${apiUrl}/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(foodItem),
            });
            // Clear form and reload the food items
            addFoodForm.reset();
            fetchFoodItems();
        } catch (error) {
            console.error('Error adding food item:', error);
        }
    });

    // Edit a food item
    window.editFood = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/${id}`);
            const foodItem = await response.json();
            // Fill in the form with the current food item details
            document.getElementById('foodItemName').value = foodItem.foodItemName;
            document.getElementById('foodGroup').value = foodItem.foodGroup;
            document.getElementById('description').value = foodItem.description;
            // Set a data attribute on the form to hold the id of the item being edited
            addFoodForm.dataset.editId = id;
        } catch (error) {
            console.error('Error fetching food item for editing:', error);
        }
    };

    // Delete a food item
    window.deleteFood = async (id) => {
        try {
            await fetch(`${apiUrl}/${id}`, {
                method: 'DELETE',
            });
            fetchFoodItems();
        } catch (error) {
            console.error('Error deleting food item:', error);
        }
    };

    // Check if we're editing an item
    addFoodForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const editId = addFoodForm.dataset.editId;
        const foodItem = {
            foodItemName: document.getElementById('foodItemName').value,
            foodGroup: document.getElementById('foodGroup').value,
            description: document.getElementById('description').value,
            // Add other fields as necessary
        };

        if (editId) {
            // Update existing item
            try {
                await fetch(`${apiUrl}/${editId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(foodItem),
                });
                // Clear form and reload the food items
                addFoodForm.reset();
                delete addFoodForm.dataset.editId; // Remove editId from dataset
                fetchFoodItems();
            } catch (error) {
                console.error('Error updating food item:', error);
            }
        } else {
            // Add new item
            try {
                await fetch(`${apiUrl}/add`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(foodItem),
                });
                // Clear form and reload the food items
                addFoodForm.reset();
                fetchFoodItems();
            } catch (error) {
                console.error('Error adding food item:', error);
            }
        }
    });

    // Initial load of food items
    fetchFoodItems();
});
