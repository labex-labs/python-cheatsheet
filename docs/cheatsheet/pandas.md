---
title: Pandas - Python Cheatsheet
description: A quick reference guide for data analysis with the Pandas library in Python.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Pandas
</base-title>

## Importing Pandas
```python
import pandas as pd
```

## Creating DataFrames
```python
data = {"name": ["Alice", "Bob", "Charlie"], "age": [25, 30, 35]}
df = pd.DataFrame(data)
```

## Reading & Writing Data
```python
df = pd.read_csv("file.csv")
df.to_csv("output.csv", index=False)
```

## Inspecting Data
```python
df.head()      # First 5 rows
df.info()      # Column types
df.describe()  # Summary stats
```

## Selecting Data
```python
df["name"]          # Single column
df[["name", "age"]] # Multiple columns
df.iloc[0]          # First row
df.loc[0, "name"]   # Specific cell
```

## Filtering
```python
df[df["age"] > 28]
```

## Aggregations
```python
df.groupby("age").mean()
```

## Handling Missing Values
```python
df.dropna()           # Remove rows with NaN
df.fillna(0)          # Replace NaN with 0
```
