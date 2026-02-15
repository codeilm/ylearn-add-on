// Predefined Categories Map
const CATEGORIES = {
  11: "Question Bank",
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

  // ----------- Marathi Medium -----------

  // Question Bank
  {
    categoryId: 11,
    class: 10,
    title: "English Question Bank",
    url: "https://app.ylearn.in/1n0_0cVVXK7BgAzQK2tPucReeKN_mrFJpjRv1odp38w%3D",
    medium: "Marathi",
  },
  {
    categoryId: 11,
    class: 10,
    title: "Marathi Question Bank",
    url: "https://app.ylearn.in/kGqIG412G9gDv7lo_mjrkW7aIQ3u-2Tm64A4lN-LmJQ%3D",
    medium: "Marathi",
  },
  {
    categoryId: 11,
    class: 10,
    title: "Algebra Question Bank",
    url: "https://app.ylearn.in/aIkQIjN9Sgc4n8CgNHz08Jv22OWOExn0gmv_7TABdWs%3D",
    medium: "Marathi",
  },
  {
    categoryId: 11,
    class: 10,
    title: "Geometry Question Bank",
    url: "https://app.ylearn.in/GBiyIv3I0t2L5_4FTJxPr1Gl4BQOafYIrqnpNh3BImM%3D",
    medium: "Marathi",
  },
  {
    categoryId: 11,
    class: 10,
    title: "Science-1 Question Bank",
    url: "https://app.ylearn.in/U9sCy4t0U02s9krDy01k4e2GxfJ-Xpcf1r2cuLwA-a0%3D",
    medium: "Marathi",
  },
  {
    categoryId: 11,
    class: 10,
    title: "Science-2 Question Bank",
    url: "https://app.ylearn.in/NdgMCQuUPkH_d3VA8zwtxPACqbscM6JcMouhLSMbD10%3D",
    medium: "Marathi",
  },
  {
    categoryId: 11,
    class: 10,
    title: "History & Political Science Question Bank",
    url: "https://app.ylearn.in/rny3FUdgNvYh264aLLY_R3HsV5jZgJD07LnN_z5x6n8%3D",
    medium: "Marathi",
  },
  {
    categoryId: 11,
    class: 10,
    title: "Geography Question Bank",
    url: "https://app.ylearn.in/o3aJLZh5j8QzfyRHYX_NkiZ5fQ_Ch2mS3ZL0ktICAvM%3D",
    medium: "Marathi",
  },

  // Board Exam Question Papers

  // Algebra
  {
    categoryId: 13,
    class: 10,
    title: "Algebra (Repeater) 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHXDfNbKPAh5Sm_4zoYToyIg%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Algebra 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHZXML4Fo3DKRBUxjpffidsE%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Algebra (Repeater) 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHXhPCqmpb2y4xRxMly22FdM%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Algebra 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHW5YkRlAJN-_kDdZS6CQF6c%3D",
    medium: "Marathi",
  },

  // Geometry
  {
    categoryId: 13,
    class: 10,
    title: "Geometry (Repeater) 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHc5t91aG96cMt3_aX4ZKc94%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Geometry 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHUe4hWzKlHHMhyRRQtOJ9pQ%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Geometry (Repeater) 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHYJFNS7EGv_HGtXw2xV9__A%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Geometry 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHYMntTyp7k717lPaMnKYWjY%3D",
    medium: "Marathi",
  },

  // Science-1
  {
    categoryId: 13,
    class: 10,
    title: "Science-1 (Repeater) 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHUHQXdatUmIfnu0ChB518NU%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Science-1 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHS3BZzdbNXuuoljTd25bwmY%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Science-1 (Repeater) 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHUZOoRxi7yup35sh8s0c334%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Science-1 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHYRBGyyPtrMXOJMvMScvas4%3D",
    medium: "Marathi",
  },

  // Science-2
  {
    categoryId: 13,
    class: 10,
    title: "Science-2 (Repeater) 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHYv3Y1QwmcyesEXCoNtBjLo%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Science-2 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHaoB72POZMUYBh-CaoNWzdg%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Science-2 (Repeater) 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHeiKk4ahAtTeEnxdBfpogso%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Science-2 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHZTJ-G2FswkOjxmsh_MyJAU%3D",
    medium: "Marathi",
  },

    // History & Political Science
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

  // Geography
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

  // Marathi
  {
    categoryId: 13,
    class: 10,
    title: "Marathi (Repeater) 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHYre0E-1C95bI7l9lO-Wgbk%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Marathi 2025 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHYAnO5pS4677jD2iBiaJQ9E%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Marathi (Repeater) 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHXOxSakojbyTWLAzxBCgROc%3D",
    medium: "Marathi",
  },
  {
    categoryId: 13,
    class: 10,
    title: "Marathi 2024 Board Exam Question Paper",
    url: "https://app.ylearn.in/_M6BJWHkYhNnMJAnbWsyHSHS9_q5ZnOop2lyzg4EZ8Y%3D",
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
