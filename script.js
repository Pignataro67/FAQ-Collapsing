render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <Dropdown
          loading={this.props.loading} 
          onSearchChange={this.props.onChange} 
          
        <Button icon>
          <Icon name='search'/> 