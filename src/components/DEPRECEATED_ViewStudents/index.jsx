// import React from 'react'

// export default function ViewStudents() {
//   return (
//     <>
//       <h3 className="font-poppins text-lg font-medium text-gray-800">
//         {totalItems} Resultado{students.length > 1 && 's'} encontrado
//         {students.length > 1 && 's'}: {formatType(selectedItem)}{' '}
//       </h3>
//       <div className="grid gap-4 xl:grid-cols-2">
//         {students.map((student) => {
//           return (
//             <article
//               key={student.id}
//               className="shadow-base  w-full overflow-y-auto rounded-lg bg-white p-4 text-left font-inter text-base leading-7 text-gray-600"
//             >
//               <div className="relative flex w-full items-center gap-x-4 pb-2">
//                 <div
//                   className={`${
//                     student.id % 2 === 0 ? 'bg-blue-100' : 'bg-red-100'
//                   } max-w-max rounded-md p-3`}
//                 >
//                   <img src="/assets/icons/person.svg" alt="Person" className="w-6" />
//                 </div>
//                 <div>
//                   <h2 className="font-poppins text-xl font-semibold text-gray-900">
//                     {student.name}
//                   </h2>
//                   <p className="font-inter">{student.course}</p>
//                 </div>
//                 {!student.scholarship.active && (
//                   <p className="absolute right-4 hidden rounded-md bg-red-100 px-3 py-1 text-sm font-medium text-red-700 sm:block">
//                     Bolsa expirada
//                   </p>
//                 )}
//               </div>
//               <hr />
//               <div className="grid w-full grid-cols-2 content-between gap-y-4 pt-4">
//                 <div className="flex items-center gap-x-2">
//                   <img src="/assets/icons/email.svg" alt="Email" className="w-5" />
//                   <p className="font-inter text-sm font-semibold text-gray-800">E-mail</p>
//                 </div>
//                 <p className="font-inter text-sm text-gray-800">{student.email}</p>
//                 <div className="flex items-center gap-x-2">
//                   <img src="/assets/icons/telephone.svg" alt="Telephone" className="w-5" />
//                   <p className="font-inter text-sm font-semibold text-gray-800">Telefone</p>
//                 </div>
//                 <p className="font-inter text-sm text-gray-800">{student.phone_number}</p>
//                 <div className="flex items-center gap-x-2">
//                   <img src="/assets/icons/university.svg" alt="University" className="w-5" />
//                   <p className="font-inter text-sm font-semibold text-gray-800">
//                     Número de matrícula
//                   </p>
//                 </div>
//                 <p className="font-inter text-sm text-gray-800">{student.enrollment_number}</p>
//                 <div className="flex items-center gap-x-2">
//                   <img src="/assets/icons/calendar.svg" alt="Calendar" className="w-5" />
//                   <p className="pr-1 font-inter text-sm font-semibold text-gray-800">
//                     Data de matrícula PGCOMP
//                   </p>
//                 </div>
//                 <p className="font-inter text-sm text-gray-800">
//                   {formatDate(student.enrollment_date_pgcomp)}
//                 </p>
//                 <div className="flex items-center gap-x-2">
//                   <img src="/assets/icons/calendar.svg" alt="Calendar" className="w-5" />
//                   <p className="pr-1 font-inter text-sm font-semibold text-gray-800">
//                     Início da bolsa
//                   </p>
//                 </div>
//                 <p className="font-inter text-sm text-gray-800">
//                   {student.scholarship?.scholarship_starts_at
//                     ? formatDate(student.scholarship.scholarship_starts_at)
//                     : 'Não informado'}
//                 </p>
//                 <div className="flex items-center gap-x-2">
//                   <img src="/assets/icons/calendar.svg" alt="Calendar" className="w-5" />
//                   <p className="pr-1 font-inter text-sm font-semibold text-gray-800">
//                     Fim da bolsa
//                   </p>
//                 </div>
//                 <p className="font-inter text-sm text-gray-800">
//                   {student.scholarship?.scholarship_ends_at
//                     ? formatDate(student.scholarship.scholarship_ends_at)
//                     : 'Não informado'}
//                 </p>
//                 <div className="flex items-center gap-x-2">
//                   <img src="/assets/icons/calendar.svg" alt="Calendar" className="w-5" />
//                   <p className="pr-1 font-inter text-sm font-semibold text-gray-800">
//                     Previsão de defesa
//                   </p>
//                 </div>
//                 <p className="font-inter text-sm text-gray-800">
//                   {student.defense_prediction
//                     ? formatDate(student.defense_prediction)
//                     : 'Não informado'}
//                 </p>
//                 <div className="flex items-center gap-x-2">
//                   <img src="/assets/icons/chain.svg" alt="Chain" className="w-5" />
//                   <a
//                     href={`https://${student.link_lattes}`}
//                     className="font-inter text-sm font-semibold text-blue-500"
//                     target="blank"
//                   >
//                     Lattes
//                   </a>
//                 </div>
//               </div>
//             </article>
//           )
//         })}
//       </div>
//     </>
//   )
// }
