// Predefined Categories Map
const CATEGORIES = {
    10: 'Notes & Formula',
    11: 'Question Bank',
    12: 'Quiz',
    13: 'Question Papers',
    14: 'Board Exam Solutions',
    15: 'Chapterwise BES',
    16: 'Paper Pattern',
    17: 'Text Book',
    18: 'Daily Videos',
    19: 'Tracker Quiz',
    20: 'Weightage'
};

// Helper function to get category name by ID
function getCategoryName(categoryId) {
    return CATEGORIES[categoryId] || 'Unknown Category';
}

// Study Materials Data (categoryName is derived from CATEGORIES map)
const studyMaterials = [
    {
        categoryId: 13,
        class: 12,
        title: 'Geography (Repeater) 2025 Board Exam Question Paper',
        url: 'https://app.ylearn.in/zV2zFkbPVpQW55fwO9cGAoUM8Y4HYabuvWEijmd957Y%3D',
    },
    {
        categoryId: 13,
        class: 12,
        title: 'Geography 2025 Board Exam Question Paper',
        url: 'https://app.ylearn.in/zV2zFkbPVpQW55fwO9cGApY8tyIbYQ7UJNvs9kJttxc%3D',
    },
    {
        categoryId: 13,
        class: 12,
        title: 'Geography (Repeater) 2024 Board Exam Question Paper',
        url: 'https://app.ylearn.in/zV2zFkbPVpQW55fwO9cGAg1KfbQcbFYLiK_hHs0-KG8%3D',
    },
    {
        categoryId: 13,
        class: 12,
        title: 'Geography 2024 Board Exam Question Paper',
        url: 'https://app.ylearn.in/zV2zFkbPVpQW55fwO9cGAgmXmMXWoK2jB0f5kmViBcI%3D',
    },
];
