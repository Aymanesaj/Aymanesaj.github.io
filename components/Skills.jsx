const skills = ["C/C++","Docker","Linux","Python","Shell","Sockets"];

export default function Skills() {
  return (
    <section className="section">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s,i)=>(
          <div key={i} className="glass p-4 rounded">{s}</div>
        ))}
      </div>
    </section>
  );
}
