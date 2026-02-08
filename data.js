// Predefined Categories Map
const CATEGORIES = {
  13: "Question Papers",
  14: "Board Exam Solutions",
};

// Helper function to get category name by ID
function getCategoryName(categoryId) {
  return CATEGORIES[categoryId] || "Unknown Category";
}

// Study Materials Data (categoryName is derived from CATEGORIES map)
const studyMaterials = [
  // ----------- 10th class --------
  // Board Exam Solutions
  {
    categoryId: 14,
    class: 10,
    title: "English (Repeater) 2021 Board Exam Solution",
    url: "https://app.ylearn.in/eK3sAuUHnshFEr9VXf6QbzF20WTS1xA733kzs29XsNA%3D",
  },
  {
    categoryId: 14,
    class: 10,
    title: "English (Repeater) 2020 Board Exam Solution",
    url: "https://app.ylearn.in/eK3sAuUHnshFEr9VXf6Qb8DwhMaCkxESRHnCrO1ilhc%3D",
  },
  {
    categoryId: 14,
    class: 10,
    title: "English 2020 Board Exam Solution",
    url: "https://app.ylearn.in/eK3sAuUHnshFEr9VXf6Qb2wP_SprTNdwqg_dQldm1gE%3D",
  },

  // ----------- 12th class --------

  // Board Exam Solutions
  {
    categoryId: 14,
    class: 12,
    title: "English (Repeater) 2022 Board Exam Solution",
    url: "https://app.ylearn.in/C-C6wQl4hTC9sVcotFsOKHzQZ8r2u6DYBmgg3WvPQ3c%3D",
  },
  {
    categoryId: 14,
    class: 12,
    title: "English 2022 Board Exam Solution",
    url: "https://app.ylearn.in/C-C6wQl4hTC9sVcotFsOKELb1FxkD7HuA3REmyRb720%3D",
  },
  {
    categoryId: 14,
    class: 12,
    title: "English (Repeater) 2021 Board Exam Solution",
    url: "https://app.ylearn.in/C-C6wQl4hTC9sVcotFsOKF165F0rFO6tLygyvcQHIRk%3D",
  },

  // Question Papers
  {
    categoryId: 13,
    class: 12,
    title: "Geography (Repeater) 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/zV2zFkbPVpQW55fwO9cGAoUM8Y4HYabuvWEijmd957Y%3D",
  },
  {
    categoryId: 13,
    class: 12,
    title: "Geography 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/zV2zFkbPVpQW55fwO9cGApY8tyIbYQ7UJNvs9kJttxc%3D",
  },
  {
    categoryId: 13,
    class: 12,
    title: "Geography (Repeater) 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/zV2zFkbPVpQW55fwO9cGAg1KfbQcbFYLiK_hHs0-KG8%3D",
  },
  {
    categoryId: 13,
    class: 12,
    title: "Geography 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/zV2zFkbPVpQW55fwO9cGAgmXmMXWoK2jB0f5kmViBcI%3D",
  },
];
