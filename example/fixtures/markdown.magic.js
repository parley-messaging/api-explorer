export default `# ReadMe Flavored Markdown

[block:api-header]
{
  "title": "ReadMe MagicBlock Conversion",
  "level": 2
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Callout Title",
  "body": "Lorem ipsum dolor sit amet, _consectetur_ adipiscing elit. Praesent nec massa tristique arcu fermentum dapibus. Integer orci turpis, mollis vel augue eget, placerat rhoncus orci. Mauris metus libero, rutrum."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "window.load(function(){\\n  console.log('Hello world!')\\n});",
      "language": "javascript"
    },
    {
      "code": "$name = 'World';\\necho \\"Hello {$name}!\\";",
      "language": "php",
      "name": "say-hello.php"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/62083ee-White_Center_Blue_BG.svg",
        "White Center Blue BG.svg",
        240,
        150,
        "#000000"
      ],
      "caption": "Qui iusto fugiat doloremque? Facilis obcaecati vitae corrupti.",
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]

## ReadMe Flavored Markdown

### Adjacent Code Samples

\`\`\`php
$name = 'World';
echo "Hello {$name}!";
\`\`\`
\`\`\`javascript test.js
window.load(function(){
  console.log('Hello world!')
});
\`\`\`

\`\`\`scss style.scss
.root {
  $b: #{&};
  &-elem {
    color: red;
    #{$b}_on & {
      color: green;
    }
  }
}
\`\`\`

## Standard Markdown

### Subsequent Code Samples

\`\`\`javascript test.js
window.load(function(){
  console.log('Hello world!')
});
\`\`\`

\`\`\`php
$name = 'World';
echo "Hello {$name}!";
\`\`\`

### Images

![Alt text](https://edit.co.uk/uploads/2016/12/Image-2-Alternatives-to-stock-photography-Thinkstock.jpg (image-title, right, 50%, auto))

### Blockquotes

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec massa tristique arcu fermentum dapibus. Integer orci turpis, mollis vel augue eget, placerat rhoncus orci. Mauris metus **libero**, rutrum eu ornare ut, molestie vel nunc. Morbi sed iaculis metus.

### Text Formatting

This text is **bold**. This text is [linked](http://google.com). This is _italic_. This is an \`inline code block\`. You can use those formatting rules in tables, paragraphs, lists, wherever (although they'll appear verbatim in code blocks.)

### Lists

#### Ordered Lists

1. This
2. Is An
3. Ordered
4. List

#### Unordered Lists

* This is a
* Bulleted list

### Sectioning

#### Headings

> ###### Heading 6
> ##### Heading 5
> #### Heading 4
> ### Heading 3
> ## Heading 2
> # Heading 1

#### Horizontal Rule

---

## GitHub Flavored Markdown

### Tables

|Foo|Bar|
|:-:|---|
|Baz|Qux|

### To Do Lists

- [ ] This
- [x] Is A
- [ ] To Do
- [x] List`;
