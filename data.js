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
  {
    categoryId: 14,
    class: 10,
    title: "Hindi (Repeater) 2021 Board Exam Solution",
    url: "https://app.ylearn.in/eK3sAuUHnshFEr9VXf6Qbxx5M4_FDzynoRPIRmE5BLY%3D",
  },
  {
    categoryId: 14,
    class: 10,
    title: "Hindi (Repeater) 2020 Board Exam Solution",
    url: "https://app.ylearn.in/eK3sAuUHnshFEr9VXf6Qb0Z8FEaXj3-NlunAFHpZq5c%3D",
  },
  {
    categoryId: 14,
    class: 10,
    title: "Hindi 2020 Board Exam Solution",
    url: "https://app.ylearn.in/eK3sAuUHnshFEr9VXf6Qb79cDFIJa6wYWYKA2RFlrSc%3D",
  },
  {
    categoryId: 14,
    class: 10,
    title: "Marathi (Repeater) 2021 Board Exam Solution",
    url: "https://app.ylearn.in/eK3sAuUHnshFEr9VXf6QbyXknHZQKfxFMjCoMPhoJU4%3D",
  },
  {
    categoryId: 14,
    class: 10,
    title: "Marathi (Repeater) 2020 Board Exam Solution",
    url: "https://app.ylearn.in/eK3sAuUHnshFEr9VXf6Qb42sKEq5P_455vqYJquhwec%3D",
  },
  {
    categoryId: 14,
    class: 10,
    title: "Marathi 2020 Board Exam Solution",
    url: "https://app.ylearn.in/eK3sAuUHnshFEr9VXf6Qb8LlyOtStz2Er2PEwdo6QjI%3D",
  },

  // Marathi Medium
  // Board Exam Question Papers
  {
    categoryId: 13,
    class: 10,
    title: "Geography (Repeater) 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHc6XBiDE0xEsNjxGPXPHnA4%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Geography 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHW8BkzvI-5uxDslNDEVtBao%3D",
    medium: "Marathi",
  },
    {
    categoryId: 13,
    class: 10,
    title: "Geography (Repeater) 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHYJUyrFAqtfzSpE-XN2pcSc%3D",
    medium: "Marathi",
  },

  {
    categoryId: 13,
    class: 10,
    title: "History & Political Science (Repeater) 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHV1xsvZsv4swJ_wg7HaTw5c%3D",
    medium: "Marathi",
  },

  {
    categoryId: 13,
    class: 10,
    title: "History & Political Science 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHcmbFeQi9bjd_nwF3VFFrD8%3D",
    medium: "Marathi",
  },

    {
    categoryId: 13,
    class: 10,
    title: "History & Political Science (Repeater) 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHWrhyeTsY1ahaEhJmdrqAZU%3D",
    medium: "Marathi",
  },

  {
    categoryId: 13,
    class: 10,
    title: "History & Political Science 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHYzyP8xbe1J0LfSbKGAi-ZA%3D",
    medium: "Marathi",
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
