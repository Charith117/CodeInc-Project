import React from 'react';
import InternshipFieldCard from '../components/InternshipFieldCard';
import internshipFields from '../data/internshipFields.json';

function Internships() {
  return (
    <div className="container px-4 mx-auto mt-8">
      <h1 className="mb-8 text-4xl font-bold">Internship Opportunities</h1>
      
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-semibold">Internship Fields</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {internshipFields.map((field) => (
            <InternshipFieldCard
              key={field.id}
              title={field.title}
              description={field.description}
              image={field.image}
            />
          ))}
        </div>
      </section>
      
      {/* You can add more sections here, such as current internship listings */}
    </div>
  );
}

export default Internships;