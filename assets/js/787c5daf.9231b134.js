"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[432],{4066:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return k},default:function(){return g}});var a=l(7462),n=l(3366),o=(l(7294),l(3905)),i=l(2004),r=l(4996),u=l(5064),s=l(8215),d=["components"],m={},c="Putting it all together",p={unversionedId:"the-basics/putting-it-all-together",id:"the-basics/putting-it-all-together",isDocsHomePage:!1,title:"Putting it all together",description:"Preamble",source:"@site/docs/02-the-basics/05-putting-it-all-together.mdx",sourceDirName:"02-the-basics",slug:"/the-basics/putting-it-all-together",permalink:"/follow-the-rabbit/docs/the-basics/putting-it-all-together",editUrl:"https://github.com/AdrienTecher/follow-the-rabbit/docs/02-the-basics/05-putting-it-all-together.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"An introduction to programming languages",permalink:"/follow-the-rabbit/docs/the-basics/intro-to-programming-languages"},next:{title:"Where to start",permalink:"/follow-the-rabbit/docs/where-to-start"}},k=[{value:"Preamble",id:"preamble",children:[]},{value:"Let&#39;s do it",id:"lets-do-it",children:[{value:"Setting up the git project",id:"setting-up-the-git-project",children:[]},{value:"Writing and executing the code",id:"writing-and-executing-the-code",children:[]},{value:"A video for reference",id:"a-video-for-reference",children:[]}]},{value:"Concluding remarks",id:"concluding-remarks",children:[]}],h={toc:k};function g(e){var t=e.components,l=(0,n.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"putting-it-all-together"},"Putting it all together"),(0,o.kt)("h2",{id:"preamble"},"Preamble"),(0,o.kt)("p",null,"If you've followed the tutorial so far, you have a basic understanding fo what is terminal, a CVS, an IDE and have set up git, GitHub and VSCode. You are more than ready to link it all together and come closer to a real dev experience.\nWhat we'll do will provide you with a ",(0,o.kt)("strong",{parentName:"p"},"playground project")," you can use for experimentations in the future."),(0,o.kt)("p",null,"As of now you might never have written actual code in a file, only commands in the terminal. Let's remedy that right away."),(0,o.kt)("p",null,'In the next chapter we will see how to choose a programming language to start with but for now we will just code a "Hello, World!" program in some of the main programming languages out there, namely:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Powershell"),(0,o.kt)("li",{parentName:"ul"},"Bash"),(0,o.kt)("li",{parentName:"ul"},"HTML"),(0,o.kt)("li",{parentName:"ul"},"Python"),(0,o.kt)("li",{parentName:"ul"},"Javascript"),(0,o.kt)("li",{parentName:"ul"},"C"),(0,o.kt)("li",{parentName:"ul"},"C++"),(0,o.kt)("li",{parentName:"ul"},"Java")),(0,o.kt)("p",null,"If you don't want to try out some of these just skip them. There is a ",(0,o.kt)("a",{parentName:"p",href:"putting-it-all-together#a-video-for-reference"},"video")," for reference down below in any case."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),'The "Hello, World!" program')),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"From Wikipedia :"),(0,o.kt)("p",{parentName:"div"},'"A \'Hello, World!\' program generally is a computer program that outputs or displays the message "Hello, World!".\nSuch a program is very simple in most programming languages, and is often used to illustrate the basic syntax of a programming language.\nIt is often the first program written by people learning to code.\nIt can also be used as a sanity test to make sure that computer software intended to compile or run source code is correctly installed, and that the operator understands how to use it."'),(0,o.kt)("a",{href:"https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"},"Read more about it here"))),(0,o.kt)("p",null,"We'll do that in these few steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a GitHub repository."),(0,o.kt)("li",{parentName:"ol"},"Clone it locally with a git command."),(0,o.kt)("li",{parentName:"ol"},"Create a source file in a language."),(0,o.kt)("li",{parentName:"ol"},"Compile, run or open the file (how we do that will depend on the language)."),(0,o.kt)("li",{parentName:"ol"},"Stage the file and commit."),(0,o.kt)("li",{parentName:"ol"},"Repeat Step 3, 4 and 5 for each language."),(0,o.kt)("li",{parentName:"ol"},"Push our commits to the remote repository on GitHub."),(0,o.kt)("li",{parentName:"ol"},"Celebrate!")),(0,o.kt)("p",null,"We will all of this via the GitHub website for Step 1 and on VSCode or a terminal for the rest."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The point of all this is not to learn the syntax of a particular language nor understanding what you will write.\nRather, the goal is to make apparent some the basic steps that constitutes coding, namely :",(0,o.kt)("br",{parentName:"p"}),"\n","Setting up project ","\u2192"," Writing code ","\u2192"," Testing your code ","\u2192"," Staging/Commiting/Pushing your changes"))),(0,o.kt)("p",null,"With that in mind, here we go \ud83d\udc83"),(0,o.kt)("h2",{id:"lets-do-it"},"Let's do it"),(0,o.kt)("h3",{id:"setting-up-the-git-project"},"Setting up the git project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On GitHub, create a new repository."),(0,o.kt)("li",{parentName:"ol"},"Clone the repository locally (on your computer). If you haven't set up SSH yet, follow ",(0,o.kt)("a",{href:"https://www.freecodecamp.org/news/git-ssh-how-to/"},"this tutorial"),"."),(0,o.kt)("li",{parentName:"ol"},"Open the newly created folder in VSCode and you're set for the next part.")),(0,o.kt)("h3",{id:"writing-and-executing-the-code"},"Writing and executing the code"),(0,o.kt)("h4",{id:"scripting-languages"},"Scripting languages"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Powershell"),(0,o.kt)("div",null,(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"prereq",label:"Prerequisites",mdxType:"TabItem"},(0,o.kt)("details",null,(0,o.kt)("summary",null,"Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"None"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"MacOS/Linux"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Install ",(0,o.kt)("a",{href:"https://github.com/powershell/powershell"},"Powershell."))))),(0,o.kt)(s.Z,{value:"code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="hello_world.ps1"',title:'"hello_world.ps1"'},'Write-Output "Hello, World!"\n'))),(0,o.kt)(s.Z,{value:"exec",label:"Execution",mdxType:"TabItem"},(0,o.kt)("details",null,(0,o.kt)("summary",null,"Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Open a Powershell terminal."),(0,o.kt)("li",null,"Navigate to the folder containing your script."),(0,o.kt)("li",null,"Execute ",(0,o.kt)("code",null,"./my-file-name.ps1")," to run it."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"MacOS/Linux"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Open a terminal."),(0,o.kt)("li",null,"Execute ",(0,o.kt)("code",null,"pwsh")," to start Powershell."),(0,o.kt)("li",null,"Navigate to the folder containing your script."),(0,o.kt)("li",null,"Execute ",(0,o.kt)("code",null,"./my-file-name.ps1")," to run it."))))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Bash"),(0,o.kt)("div",null,(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"prereq",label:"Prerequisites",mdxType:"TabItem"},(0,o.kt)("details",null,(0,o.kt)("summary",null,"Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Install the Windows Subsystem for Linux. ",(0,o.kt)("a",{href:"https://www.windowscentral.com/how-install-wsl2-windows-10"},"Here is a tutorial"),"."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"MacOS/Linux"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"None")))),(0,o.kt)(s.Z,{value:"code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="hello-world.sh"',title:'"hello-world.sh"'},"echo 'Hello, World!'\n"))),(0,o.kt)(s.Z,{value:"exec",label:"Execution",mdxType:"TabItem"},(0,o.kt)("details",null,(0,o.kt)("summary",null,"Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Open a new Linux terminal."),(0,o.kt)("li",null,"Navigate to the folder containing your script."),(0,o.kt)("li",null,"Execute ",(0,o.kt)("code",null,"./my-file-name.sh")," to run it."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"MacOS/Linux"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Open a terminal."),(0,o.kt)("li",null,"Navigate to the folder containing your script."),(0,o.kt)("li",null,"Execute ",(0,o.kt)("code",null,"./my-file-name.sh")," to run it."))))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Python"),(0,o.kt)("div",null,(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"prereq",label:"Prerequisites",default:!0,mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Install Python from the ",(0,o.kt)("a",{href:"https://www.python.org/downloads/release/python-397/"},"official website"),"."))),(0,o.kt)(s.Z,{value:"code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="hello_world.py"',title:'"hello_world.py"'},'print("Hello, world!")\n'))),(0,o.kt)(s.Z,{value:"exec",label:"Execution",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Open a terminal."),(0,o.kt)("li",null,"Navigate to the folder containing your script."),(0,o.kt)("li",null,"Execute ",(0,o.kt)("code",null,"python ./my-file-name.py")," to run it.")))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Javascript"),(0,o.kt)("div",null,(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"prereq",label:"Prerequisites",default:!0,mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Install NodeJS. Here is the ",(0,o.kt)("a",{href:"https://nodejs.org/"},"official website"),"."))),(0,o.kt)(s.Z,{value:"code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="hello-world.js"',title:'"hello-world.js"'},'console.log("Hello, World!");\n'))),(0,o.kt)(s.Z,{value:"exec",label:"Execution",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Open a terminal."),(0,o.kt)("li",null,"Navigate to the folder containing your script."),(0,o.kt)("li",null,"Execute ",(0,o.kt)("code",null,"node ./my-file-name.js")," to run it.")))))),(0,o.kt)("h4",{id:"markup-languages"},"Markup languages"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"HTML"),(0,o.kt)("div",null,(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"prereq",label:"Prerequisites",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"None."))),(0,o.kt)(s.Z,{value:"code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="hello-world.html"',title:'"hello-world.html"'},"<p>Hello, World!</p>\n"))),(0,o.kt)(s.Z,{value:"exec",label:"Execution",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Open the file with your favorite browser.")))))),(0,o.kt)("h4",{id:"compiled-languages"},"Compiled languages"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"C"),(0,o.kt)("div",null,(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"prereq",label:"Prerequisites",default:!0,mdxType:"TabItem"},(0,o.kt)("details",null,(0,o.kt)("summary",null,"Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Install a C/C++ compiler. ",(0,o.kt)("a",{href:"https://www.windowscentral.com/how-install-wsl2-windows-10"},"Here is a tutorial"),"."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"MacOS"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Check if you have the clang C/C++ compiler by executing the command ",(0,o.kt)("code",null,"clang --version"),"; if you see a version, you have it."),(0,o.kt)("li",null,"If you don't :")),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Download xcode from the app store"),(0,o.kt)("li",null,"Run the xcode installer."),(0,o.kt)("li",null,"Open up xcode go to XCode >> Preferences >> Downloads >> Command Line Tools and click install."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Linux"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Install a C/C++ compiler. ",(0,o.kt)("a",{href:"https://www.ubuntupit.com/how-to-install-and-use-gcc-compiler-on-linux-system/"},"Here is a tutorial"),".")))),(0,o.kt)(s.Z,{value:"code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="hello-world.c"',title:'"hello-world.c"'},'#include <stdio.h>\n\nint main(){\n    printf("Hello, World!");\n    return 0;\n}\n'))),(0,o.kt)(s.Z,{value:"exec",label:"Execution",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Open a new terminal."),(0,o.kt)("li",null,"Navigate to the folder containing your source code file."),(0,o.kt)("li",null,"Execute ",(0,o.kt)("code",null,"gcc my-file-name.c -o my-executable-name ")," to compile the source code in an executable. ",(0,o.kt)("b",null,"Note : "),"you should replace 'gcc' by the name of your compiler if you are using a different one (such as clang on MacOS)."),(0,o.kt)("li",null,"Run your progam by executing ",(0,o.kt)("code",null,"./my-executable-name"),".")))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"C++"),(0,o.kt)("div",null,(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"prereq",label:"Prerequisites",mdxType:"TabItem"},"Same prerequisites as for C."),(0,o.kt)(s.Z,{value:"code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="hello-world.cpp"',title:'"hello-world.cpp"'},'#include <iostream>\n\nusing namespace std;\n\nint main(){\n    cout << "Hello, World!" << endl;\n}\n'))),(0,o.kt)(s.Z,{value:"exec",label:"Execution",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Open a new terminal."),(0,o.kt)("li",null,"Navigate to the folder containing your source code file."),(0,o.kt)("li",null,"Execute ",(0,o.kt)("code",null,"g++ my-file-name.cpp -o my-executable-name ")," to compile the source code in an executable. ",(0,o.kt)("b",null,"Note : "),"you should replace 'gcc' by the name of your compiler if you are using a different one (such as clang on MacOS)."),(0,o.kt)("li",null,"Run your progam by executing ",(0,o.kt)("code",null,"./my-executable-name"),".")))))),(0,o.kt)("h4",{id:"interpreted-languages"},"Interpreted languages"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Java"),(0,o.kt)("div",null,(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"prereq",label:"Prerequisites",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Install the Java Development Kit from the ",(0,o.kt)("a",{href:"https://www.oracle.com/java/technologies/downloads/#jdk17-linux"},"official website"),"."))),(0,o.kt)(s.Z,{value:"code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="HelloWorld.java"',title:'"HelloWorld.java"'},'class HelloWorld {\n  public static void main(String args[]){\n    System.out.println("Hello, World!");\n\n  }\n}\n'))),(0,o.kt)(s.Z,{value:"exec",label:"Execution",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Open a new terminal."),(0,o.kt)("li",null,"Navigate to the folder containing your source code file."),(0,o.kt)("li",null,"Execute ",(0,o.kt)("code",null,"javac my-file-name.java")," to compile the source code to a Java class."),(0,o.kt)("li",null,"Run your Java class by executing ",(0,o.kt)("code",null,"java my-file-name"),".")))))),(0,o.kt)("h3",{id:"a-video-for-reference"},"A video for reference"),(0,o.kt)("p",null,"Here is a video that shows all the steps. Note that I use the Code Runner extension for VSCode, so that I don't have to write my execution commands."),(0,o.kt)(i.Z,{controls:!0,url:(0,r.Z)("/video/putting-it-all-together.mp4"),mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"concluding-remarks"},"Concluding remarks"),(0,o.kt)("p",null,"Well done, now you are ready to go learn actual programming.\nI hope you have noted that these languages share similarities.\nThat is a reason why if you know one programming language it is relatively easy to learn another (all depending on how similar they are ofc).",(0,o.kt)("br",{parentName:"p"}),"\n","We'll see in the next section which language you should pick as the first one.",(0,o.kt)("br",{parentName:"p"}),"\n","I would like before you move on, that whatever you choose to learn, whenever you code, remember to version your work by staging/commiting/pushing your work.\nThis way you will have automatisms for when you wish to collaborate and will never loose code. ",(0,o.kt)("a",{href:"https://jasonmccreary.me/articles/when-to-make-git-commit/"},"Here is a short article on when to commit"),"."))}g.isMDXComponent=!0}}]);