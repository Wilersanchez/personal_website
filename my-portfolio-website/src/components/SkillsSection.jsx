

// MATLAB, python, labview, C, Javascript, HTML/CSS

const skills = [

    // frontend (subject to change)
    {name: "MATLAB", level:95, category:"frontend"},
    {name: "Python", level:95, category:"frontend"},
    {name: "LabVIEW", level:95, category:"frontend"},
    {name: "Solidworks", level:95, category:"frontend"},
    {name: "C", level:95, category:"frontend"},
    {name: "JavaScript", level:95, category:"frontend"},
    {name: "React", level:95, category:"frontend"},
    {name: "Tailwind CSS", level:95, category:"frontend"},
    {name: "STK", level:95, category:"frontend"},
    {name: "Ansys", level:95, category:"frontend"},

    // backend (subject to change)
    {name: "Node.js", level:95, category:"backend"},
    {name: "MongoDB", level:95, category:"backend"},
    {name: "SQL", level:95, category:"backend"},
    {name: "C", level:95, category:"backend"},
    {name: "JavaScript", level:95, category:"backend"},
    {name: "React", level:95, category:"backend"},
    {name: "Tailwind CSS", level:95, category:"backend"},

    // Tools 
    {name: "Git/Github", level:95, category:"tools"},
    {name: "Docker", level:95, category:"tools"},
    {name: "Figma", level:95, category:"tools"},
    {name: "Jira", level:95, category:"tools"},
    {name: "VS Code", level:95, category:"tools"},  
    {name: "AWS", level:95, category:"tools"},              
]

export const SkillSection = () => {
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
        </div>
    </section>;
};