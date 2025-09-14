# 📋 Issue Template Suggestions

## Current Templates
- ✅ **Add New Tool** - For adding AI tools to the collection
- ✅ **Bug Report** - For reporting bugs and issues
- ✅ **Feature Request** - For suggesting new features

## Suggested Additional Templates

### 1. 🔧 **Improvement Request**
```yaml
name: 🔧 Improvement Request
about: Suggest improvements to existing features
labels: ['improvement', 'enhancement']
```
**Use case**: Enhance existing functionality without adding new features

### 2. 📚 **Documentation Issue**
```yaml
name: 📚 Documentation Issue
about: Report issues with documentation or suggest documentation improvements
labels: ['documentation', 'help wanted']
```
**Use case**: Fix outdated docs, add missing documentation, improve clarity

### 3. 🎨 **Design/UI Issue**
```yaml
name: 🎨 Design/UI Issue
about: Report design inconsistencies or suggest UI improvements
labels: ['design', 'ui/ux', 'frontend']
```
**Use case**: Visual bugs, accessibility issues, design improvements

### 4. ⚡ **Performance Issue**
```yaml
name: ⚡ Performance Issue
about: Report performance problems or suggest optimizations
labels: ['performance', 'optimization']
```
**Use case**: Slow loading, memory issues, optimization suggestions

### 5. 🔍 **Data Quality Issue**
```yaml
name: 🔍 Data Quality Issue
about: Report incorrect tool information or broken links
labels: ['data-quality', 'maintenance']
```
**Use case**: Wrong descriptions, broken URLs, outdated information

### 6. 🤝 **Collaboration Request**
```yaml
name: 🤝 Collaboration Request
about: Propose partnerships or collaboration opportunities
labels: ['collaboration', 'partnership']
```
**Use case**: Tool partnerships, content collaborations, integrations

### 7. 🏷️ **Category Request**
```yaml
name: 🏷️ Category Request
about: Suggest new categories for AI tools
labels: ['category', 'organization']
```
**Use case**: New tool categories, reorganization suggestions

### 8. 🔒 **Security Issue**
```yaml
name: 🔒 Security Issue
about: Report security vulnerabilities (private template)
labels: ['security', 'critical']
```
**Use case**: Security vulnerabilities, privacy concerns

### 9. 📱 **Mobile Issue**
```yaml
name: 📱 Mobile Issue
about: Report mobile-specific problems or improvements
labels: ['mobile', 'responsive', 'ui/ux']
```
**Use case**: Mobile responsiveness, touch interactions, mobile UX

### 10. 🌐 **Accessibility Issue**
```yaml
name: 🌐 Accessibility Issue
about: Report accessibility problems or suggest improvements
labels: ['accessibility', 'a11y', 'inclusive']
```
**Use case**: Screen reader issues, keyboard navigation, color contrast

## Template Structure Best Practices

### Essential Fields
```yaml
---
name: Template Name
about: Brief description
title: '[PREFIX] '
labels: ['label1', 'label2']
assignees: ''
---
```

### Recommended Sections
1. **Clear Description** - What is the issue/request?
2. **Context/Background** - Why is this needed?
3. **Steps to Reproduce** (for bugs)
4. **Expected vs Actual** (for bugs)
5. **Environment Info** (when relevant)
6. **Additional Context** - Screenshots, links, etc.
7. **Checkboxes** - For categorization and commitment

### Labels Strategy
- **Type**: `bug`, `feature`, `improvement`, `documentation`
- **Priority**: `low`, `medium`, `high`, `critical`
- **Area**: `frontend`, `backend`, `design`, `data`
- **Status**: `needs-triage`, `help-wanted`, `good-first-issue`

## Implementation Priority

### High Priority (Implement First)
1. 🔍 **Data Quality Issue** - Critical for maintaining tool accuracy
2. 📚 **Documentation Issue** - Helps improve project clarity
3. 🔧 **Improvement Request** - Separates improvements from new features

### Medium Priority
4. 🎨 **Design/UI Issue** - Important for user experience
5. 🏷️ **Category Request** - Helps with organization
6. ⚡ **Performance Issue** - Technical improvements

### Low Priority (Nice to Have)
7. 🤝 **Collaboration Request** - Business development
8. 📱 **Mobile Issue** - Can be covered by bug reports initially
9. 🌐 **Accessibility Issue** - Can be covered by improvement requests
10. 🔒 **Security Issue** - Use private reporting instead

## Configuration Tips

### Auto-assign Labels
```yaml
# In .github/labeler.yml
'data-quality':
  - '.github/ISSUE_TEMPLATE/data-quality.md'
```

### Issue Forms (Advanced)
Consider upgrading to GitHub Issue Forms for better UX:
```yaml
name: Bug Report
description: File a bug report
body:
  - type: dropdown
    attributes:
      label: Category
      options:
        - UI/UX
        - Performance
        - Data
```

### Template Validation
Add template validation in workflows to ensure quality submissions.