import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, Grid, CardContent, ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import backgroundImage from '../assets/inno.png';

const customTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main: '#f50057',
            contrastText: '#ffffff',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.05rem',
                    boxShadow: '0px 4px 15px rgba(245, 0, 87, 0.4)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                },
                outlined: {
                    borderColor: 'rgba(255, 255, 255, 0.7)',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                },
            },
        },
    },
});

const Skills = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState('');
    const [mustHaveSkills, setMustHaveSkills] = useState(Array(3).fill(''));
    const [industryKnowledge, setIndustryKnowledge] = useState(Array(3).fill(''));

    const itSkillsOptions = [
        "Adobe Creative Suite", "Agile Methodologies", "Angular", "AR (Augmented Reality)",
        "AWS", "Azure", "Big Data Technologies", "Blockchain", "CI/CD (Continuous Integration/Continuous Deployment)",
        "C#", "C++", "Cybersecurity", "Data Analysis", "Data Visualization", "Deep Learning",
        "DevOps", "Django", "Docker", "Elasticsearch", "Express.js", "Figma", "Flask",
        "GCP", "GraphQL", "Hadoop", "IoT (Internet of Things)", "Java", "JavaScript",
        "Kotlin", "Kubernetes", "Machine Learning", "Mobile Development (iOS and Android)",
        "Node.js", "NoSQL", "PHP", "Prototyping", "Python", "React", "Ruby", "Scrum",
        "Sketch", "Spark", "Spring Boot", "SQL", "Swift", "TypeScript", "Unity (Game Development)",
        "Unreal Engine", "UX/UI Design", "Vue.js", "VR (Virtual Reality)", "Web3", "Wireframing"
      ];      
    const industryKnowledgeOptions = ["Biotech/Medtech", "Construction", "Design and Furniture Industry", "Energy", "IT & Communication", "Agriculture", "Maritime", "Transport", "Logistics", "Financial Sector"];
    const categoryOptions = [
        "Agile Methodologies", "Artificial Intelligence", "Big Data", "Blockchain Technology",
        "Business Intelligence", "Cloud Computing", "Coding", "Cyber Security", "Data Analysis",
        "Data Management", "DevOps", "Digital Marketing", "Game Development", "Internet of Things (IoT)",
        "Machine Learning", "Mobile Development", "Network Security", "Project Management",
        "Quality Assurance", "Robotics", "Salesforce Cloud", "Software Development", "UI/UX Design",
        "Virtual Reality/Augmented Reality", "Web Development"
      ];      

    const handleNext = () => navigate('/assignment-description');
    const handleBack = () => navigate('/experience');

    const renderSkillSelect = (skills, setSkills, options, label) => (
        <Grid container spacing={2}>
            {skills.map((skill, index) => (
                <Grid item xs={12} key={index}>
                    <FormControl fullWidth sx={{ minWidth: 250, mb: 2 }}> {/* Tilføjet minWidth her */}
                        <InputLabel>{label}</InputLabel>
                        <Select
                            value={skill}
                            label={label}
                            onChange={(e) => {
                                const newSkills = [...skills];
                                newSkills[index] = e.target.value;
                                setSkills(newSkills);
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backdropFilter: 'blur(4px)',
                                        backgroundColor: 'rgba(30,30,30,0.9)',
                                        boxShadow: customTheme.shadows[5],
                                        color: customTheme.palette.primary.contrastText,
                                    },
                                },
                            }}
                        >
                            {options.map((option, idx) => (
                                <MenuItem key={idx} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            ))}
        </Grid>
    );

    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={{
                backgroundImage: `url(${backgroundImage})`,
                minHeight: '100vh',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundBlendMode: 'multiply',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                //overflow: 'hidden', // Added to prevent overflow
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    sx={{ maxWidth: 800, width: '90%', m: 3, p: 3, background: 'linear-gradient(145deg, #1e1e1e, #383838)', boxShadow: '0px 8px 25px rgba(33, 150, 243, 0.5)', borderRadius: '4px' }}
                >
                    <CardContent>
                        <Typography  variant="h4" sx={{ mb: 3, textAlign: 'center', color: customTheme.palette.primary.contrastText }}>Skills Selection</Typography>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={category}
                                label="Category"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                {categoryOptions.map((option, idx) => (
                                    <MenuItem key={idx} value={option}>{option}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Typography variant="h6" sx={{ mt: 4, mb: 2, color: customTheme.palette.primary.contrastText }}>Must Have Skills</Typography>
                        {renderSkillSelect(mustHaveSkills, setMustHaveSkills, itSkillsOptions, "Must Have Skill")}

                        <Typography variant="h6" sx={{ mt: 4, mb: 2, color: customTheme.palette.primary.contrastText }}>Industry Knowledge</Typography>
                        {renderSkillSelect(industryKnowledge, setIndustryKnowledge, industryKnowledgeOptions, "Industry Knowledge")}

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                            <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={handleBack} sx={{ borderColor: customTheme.palette.primary.main, color: customTheme.palette.primary.contrastText }}>Back</Button>
                            <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={handleNext}>Next</Button>
                        </Box>
                    </CardContent>
                </motion.div>
            </Box>
        </ThemeProvider>
    );
};

export default Skills;
