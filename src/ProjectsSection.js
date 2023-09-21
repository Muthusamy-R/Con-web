import React from 'react';

const ProjectsSection = () => {
  return (
    <section className="container mx-auto mt-8 p-8">
      <h2 className="text-2xl mb-4 text-center">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg shadow-lg bg-gray-100">
          <img src="project1.jpg" alt="Project 1" className="w-full h-40 object-cover mb-4" />
          <h3 className="text-xl font-bold mb-2">Project Title 1</h3>
          <p>Description of Project 1: We constructed a beautiful residential building with modern amenities and elegant architecture.</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-gray-100">
          <img src="project2.jpg" alt="Project 2" className="w-full h-40 object-cover mb-4" />
          <h3 className="text-xl font-bold mb-2">Project Title 2</h3>
          <p>Description of Project 2: Our team successfully completed the construction of a state-of-the-art commercial complex, meeting the client's expectations for functionality and aesthetics.</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-gray-100">
          <img src="project3.jpg" alt="Project 3" className="w-full h-40 object-cover mb-4" />
          <h3 className="text-xl font-bold mb-2">Project Title 3</h3>
          <p>Description of Project 3: This renovation project transformed a dated space into a modern and vibrant environment, reflecting our expertise in renovation services.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;