# search-Indonesia

## Features

- **Search Functionality:** Users can search across multiple categories including "Perguruan Tinggi" (Universities), "Program Studi" (Study Programs), "Dosen" (Lecturers), and "Mahasiswa" (Students).
  - **Dynamic Display:** Results are displayed dynamically based on the selected search category, showing relevant details for each type of result.

- **Responsive Design:** The website is fully responsive, ensuring optimal viewing on various devices including desktops, tablets, and smartphones.

- **User-friendly Interface:** Simple and intuitive user interface with easy-to-use search forms and clearly displayed search results.

- **Error Handling:** The application provides meaningful error messages if no results are found or if there are issues with the network connection.

## Website Structure

- **Home Page:**
  - Search form with a dropdown menu to select the search category (All, Universities, Study Programs, Lecturers, Students).
  - Input field for search queries.
  - Search results section that updates dynamically based on the user's query and selected category.

- **API Integration:**
  - Fetches data from an API endpoint based on the search query and selected category.
  - Processes and displays data according to the type of information (Universities, Study Programs, Lecturers, Students).

- **Results Display:**
  - Results are formatted in a user-friendly manner, displaying relevant information based on the selected category.
  - Each result is shown in a card layout with fields such as name, institution, program, NIM, NIDN, etc., depending on the type of result.

## Tech Stack

- **Next.js:** 
  - Utilized for server-side rendering and building a dynamic, modern web application.
  - Enables efficient routing and seamless integration with various APIs.

- **Tailwind CSS:** 
  - Provides utility-first CSS framework for designing the website's responsive and visually appealing user interface.
  - Simplifies the styling process with pre-defined classes and customization options.

- **JavaScript (ES6+):**
  - Core scripting language used for handling the search logic, fetching data from APIs, and dynamically rendering search results.

- **API Integration:**
  - The project is integrated with external APIs to retrieve data based on user searches, ensuring the information is current and relevant.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/purwocode/search-Indonesia.git
"# Search-Indonesia" 
