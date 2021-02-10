/** Credit Leigh Halliday
 * Great resources:
 * https://www.youtube.com/watch?v=28StAxSjyIU&t=2116s
 * https://www.youtube.com/watch?v=AUiUZ29pae4&t=369s
 */

// map == transform array elements one by one to produce new array
// reduce == transform array elements one by one to produce some new value
// filter == pick certain elements to exist in new array
// slice == build a new array with certain elements selected by index

/*
data should come back formatted like:
[
  { color: "#f1e05a", id: "JavaScript", label: "JavaScript", value: 3 },
  { color: "#563d7c", id: "CSS", label: "CSS", value: 3 },
  { color: "#e34c26", id: "HTML", label: "HTML", value: 3 },
]
*/

export const topLanguages = repositories => {
  const langObject = repositories.nodes.reduce(
    (langs, { languages }) => {
      return languages.nodes.reduce((repLangs, { name, color }) => {
        if (!repLangs[name]) {
          repLangs[name] = { count: 0, color }
        }
        repLangs[name].count += 1
        return repLangs
      }, langs)
    },
    {}
  )

  const langArray = formatLanguagesForChart(langObject)

  return langArray.sort((a, b) => b.value - a.value).slice(0, 5)
}

const entries = object =>
  Object.keys(object).map(key => [key, object[key]])

const formatLanguagesForChart = langObject =>
  entries(langObject)
    .map(([key, { count, color }]) => ({
      id: key,
      label: key,
      value: count,
      color,
    }))
    .filter(data => data.color && data.value > 1)

/*
data should come back formatted like:
[
  { day: '2018-12-09', value: 11 },
  { day: '2018-12-10', value: 6 },
  { day: '2018-12-11', value: 11 },
  { day: '2018-12-12', value: 25 },
]
*/

/**
  contributionDays: [
  {
    color: "#7bc96f"
    contributionCount: 43
    date: "2019-12-01"
    weekday: 0
  },
  ...
]
*/
export const contributions = weeks => {
  const arrayOfDays = []
  for (const { contributionDays } of weeks) {
    const days = contributionDays.map(
      ({ contributionCount, date }) => {
        return {
          day: date,
          value: contributionCount,
        }
      }
    )
    arrayOfDays.push(days)
  }
  return [].concat.apply([], arrayOfDays)
}
