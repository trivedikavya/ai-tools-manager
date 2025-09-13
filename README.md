# 🎁 AI Tools Collection - Open Source

A curated collection of powerful AI tools, maintained by the community. This project welcomes contributions from developers worldwide to help build the most comprehensive AI tools directory.

## 🌟 Features

- **Curated AI Tools**: Hand-picked collection of the best free AI tools
- **Community Driven**: Open for contributions from anyone
- **Responsive Design**: Works perfectly on all devices
- **Easy Navigation**: Organized by categories for quick discovery
- **Analytics Tracking**: Usage insights with Google Analytics

## 🚀 Live Demo

Visit the live website: [AI Tools Collection](https://ai-tool-collection.vercel.app/)

## 📊 Current Stats

- **28+** Free AI Tools
- **6** Categories
- **Open Source** & Community Maintained

## 🤝 How to Contribute

We welcome contributions from everyone! Here's how you can help improve this project:

### Adding New AI Tools

1. **Fork this repository**
2. **Clone your fork locally**

   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-tools-manager.git
   cd ai-tools-manager
   ```

3. **Add your tool to `links.json`**
   - Find the appropriate category or create a new one
   - Add your tool following this format:

   ```json
   {
     "title": "Tool Name",
     "url": "https://tool-website.com",
     "description": "Brief description of what the tool does"
   }
   ```

4. **Add yourself as a contributor** (see below)

5. **Test your changes**
   - Open `index.html` in your browser
   - Verify your tool appears correctly
   - Check that the link works

6. **Submit a Pull Request**
   - Create a descriptive title
   - Explain what tool you added and why it's valuable
   - Include any relevant screenshots

### Adding Yourself as a Contributor

When you contribute, add yourself to the contributors list:

1. **Add your information to `contributors.json`**:

   ```json
   {
     "name": "Your Name",
     "github": "your-github-username",
     "avatar": "https://github.com/your-username.png",
     "contributions": ["Added Tool Name", "Fixed bug in category X"],
     "website": "https://your-website.com" // optional
   }
   ```

2. **Your profile will automatically appear** in the contributors section

## 📁 Project Structure

```
ai-tools-manager/
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # JavaScript functionality
├── links.json          # AI tools database
├── contributors.json   # Contributors database
├── README.md           # This file
└── assets/
    └── images/         # Project images
```

## 🛠️ Development Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/ArshdeepGrover/ai-tools-manager.git
   cd ai-tools-manager
   ```

2. **Open in your browser**

   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local development server:
   
   # Using Node.js (if installed):
   npx serve .
   
   # Using PHP (if installed):
   php -S localhost:8000
   
   # Or just double-click index.html to open in browser
   ```

3. **Make your changes**
   - Edit `links.json` to add/modify tools
   - Update `contributors.json` to add yourself
   - Modify CSS/JS as needed

## 📋 Contribution Guidelines

### For AI Tools

- **Free or Freemium**: Tools should have a free tier or be completely free
- **Working Links**: Ensure all URLs are active and correct
- **Accurate Descriptions**: Provide clear, concise descriptions
- **Appropriate Category**: Place tools in the right category
- **No Duplicates**: Check if the tool already exists

### For Code Contributions

- **Clean Code**: Follow existing code style and structure
- **Test Changes**: Ensure your changes don't break existing functionality
- **Responsive Design**: Maintain mobile-friendly design
- **Performance**: Keep the site fast and lightweight

### Creating New Categories

If you want to add a new category:

1. **Add to `links.json`**:

   ```json
   {
     "name": "New Category Name",
     "icon": "🔥", // Choose an appropriate emoji
     "links": [
       // Your tools here
     ]
   }
   ```

2. **Ensure it fits the theme**: Should be AI-related tools

## 🎨 Design Guidelines

- **Consistent Styling**: Follow the existing design patterns
- **Accessibility**: Ensure good contrast and keyboard navigation
- **Mobile First**: Design should work on mobile devices
- **Performance**: Optimize images and minimize code

## 📈 Analytics

This project uses Google Analytics to track:

- Page views and user engagement
- Popular tools and categories
- Geographic distribution of users
- Device and browser usage

Analytics help us understand how to improve the collection and what tools are most valuable to users.

## 🏆 Contributors

Thank you to all the amazing people who have contributed to this project!

<!-- Contributors will be automatically displayed here -->

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Original Creator**: [Arshdeep Singh](https://github.com/ArshdeepGrover)
- **All Contributors**: Thank you for making this project better!
- **AI Tool Creators**: Thanks to all the amazing AI tool developers

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/ArshdeepGrover/ai-tools-manager/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ArshdeepGrover/ai-tools-manager/discussions)
- **Creator**: [Arshdeep Singh](https://arshdeepsingh.info)

---

**⭐ If you find this project helpful, please give it a star on GitHub!**

Made with ❤️ by the community
